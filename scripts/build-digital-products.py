"""
Builds the paid download kits into /private-downloads.

    pip install openpyxl python-docx
    python scripts/build-digital-products.py

Files in /private-downloads are NOT public — buyers get them only through
signed links from /api/download after paying (see lib/paidServices.ts).
Edit the content here and re-run to update a kit.
"""

from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, RGBColor
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.worksheet.pagebreak import Break

OUT = Path(__file__).resolve().parent.parent / "private-downloads"
OUT.mkdir(exist_ok=True)

NAVY = "002B5C"
GOLD = "D99A2B"
LIGHT = "F3F6FA"
INPUT = "FFF7E6"
FIRM = "Rajput Lalit & Associates · www.rajputlalitassociates.in · WhatsApp +91 93549 53603"

thin = Side(style="thin", color="C9D2DE")
BOX = Border(left=thin, right=thin, top=thin, bottom=thin)
H_FONT = Font(bold=True, color="FFFFFF")
H_FILL = PatternFill("solid", fgColor=NAVY)
IN_FILL = PatternFill("solid", fgColor=INPUT)
TOT_FILL = PatternFill("solid", fgColor=LIGHT)
MONEY = '#,##0.00'
DATE = "dd-mm-yyyy"

STATES = [
    ("01", "Jammu and Kashmir"), ("02", "Himachal Pradesh"), ("03", "Punjab"), ("04", "Chandigarh"),
    ("05", "Uttarakhand"), ("06", "Haryana"), ("07", "Delhi"), ("08", "Rajasthan"), ("09", "Uttar Pradesh"),
    ("10", "Bihar"), ("11", "Sikkim"), ("12", "Arunachal Pradesh"), ("13", "Nagaland"), ("14", "Manipur"),
    ("15", "Mizoram"), ("16", "Tripura"), ("17", "Meghalaya"), ("18", "Assam"), ("19", "West Bengal"),
    ("20", "Jharkhand"), ("21", "Odisha"), ("22", "Chhattisgarh"), ("23", "Madhya Pradesh"), ("24", "Gujarat"),
    ("26", "Dadra and Nagar Haveli and Daman and Diu"), ("27", "Maharashtra"), ("29", "Karnataka"),
    ("30", "Goa"), ("31", "Lakshadweep"), ("32", "Kerala"), ("33", "Tamil Nadu"), ("34", "Puducherry"),
    ("35", "Andaman and Nicobar Islands"), ("36", "Telangana"), ("37", "Andhra Pradesh"), ("38", "Ladakh"),
    ("97", "Other Territory"),
]
GST_RATES = "0,0.25,3,5,18,40"
FY_MONTHS = [(2026, m) for m in range(4, 13)] + [(2027, m) for m in range(1, 4)]


# ---------------------------------------------------------------- helpers --

def header(ws, row, titles, widths=None):
    for i, t in enumerate(titles, start=1):
        c = ws.cell(row=row, column=i, value=t)
        c.font = H_FONT
        c.fill = H_FILL
        c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        c.border = BOX
    ws.row_dimensions[row].height = 32
    if widths:
        for i, w in enumerate(widths, start=1):
            ws.column_dimensions[get_column_letter(i)].width = w


def title(ws, text, sub=None, span=8):
    ws["A1"] = text
    ws["A1"].font = Font(bold=True, size=16, color=NAVY)
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=span)
    if sub:
        ws["A2"] = sub
        ws["A2"].font = Font(italic=True, size=10, color="6B7280")
        ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=span)


def how_to(wb, heading, steps, notes=()):
    ws = wb.active
    ws.title = "How to use"
    ws.column_dimensions["A"].width = 6
    ws.column_dimensions["B"].width = 110
    ws["B1"] = heading
    ws["B1"].font = Font(bold=True, size=18, color=NAVY)
    ws["B2"] = FIRM
    ws["B2"].font = Font(size=10, color=GOLD, bold=True)
    r = 4
    ws.cell(row=r, column=2, value="Steps").font = Font(bold=True, size=13, color=NAVY)
    for i, s in enumerate(steps, start=1):
        r += 1
        ws.cell(row=r, column=1, value=i).font = Font(bold=True, color=GOLD)
        c = ws.cell(row=r, column=2, value=s)
        c.alignment = Alignment(wrap_text=True, vertical="top")
    if notes:
        r += 2
        ws.cell(row=r, column=2, value="Good to know").font = Font(bold=True, size=13, color=NAVY)
        for n in notes:
            r += 1
            c = ws.cell(row=r, column=2, value="• " + n)
            c.alignment = Alignment(wrap_text=True, vertical="top")
    r += 2
    c = ws.cell(row=r, column=2, value="Cells shaded light yellow are for your entries. White cells contain formulas — "
                                         "please don't type over them.")
    c.fill = IN_FILL
    c.alignment = Alignment(wrap_text=True)
    r += 2
    ws.cell(row=r, column=2, value="Licensed for use in your own business. Please do not resell or share publicly. "
                                     "This template is a working aid, not professional advice.").font = Font(size=9, color="6B7280")
    return ws


def label_rows(ws, start_row, rows, col_w=(34, 50)):
    ws.column_dimensions["A"].width = col_w[0]
    ws.column_dimensions["B"].width = col_w[1]
    for i, (label, value) in enumerate(rows):
        r = start_row + i
        ws.cell(row=r, column=1, value=label).font = Font(bold=True)
        c = ws.cell(row=r, column=2, value=value)
        c.fill = IN_FILL
        c.border = BOX


def input_block(ws, first_row, last_row, cols):
    for r in range(first_row, last_row + 1):
        for col in cols:
            c = ws.cell(row=r, column=col)
            c.fill = IN_FILL
            c.border = BOX


def states_sheet(wb):
    ws = wb.create_sheet("States")
    header(ws, 1, ["Code", "State / UT", "Code + Name"], [8, 42, 50])
    for i, (code, name) in enumerate(STATES, start=2):
        ws.cell(row=i, column=1, value=code)
        ws.cell(row=i, column=2, value=name)
        ws.cell(row=i, column=3, value=f"{code} - {name}")
    ws.sheet_state = "hidden"
    return f"States!$C$2:$C${len(STATES) + 1}"


# --------------------------------------------------------- GST invoice kit --

def gst_invoice_kit():
    wb = Workbook()
    how_to(
        wb,
        "GST Invoice & Billing Kit",
        [
            "Open the 'Settings' sheet and enter your business name, address, GSTIN, state and bank details once.",
            "Open 'Invoice'. Enter invoice number, date, buyer details and pick the buyer's state (place of supply).",
            "Add items (up to 15 lines): description, HSN/SAC, quantity, rate, discount % and GST rate. Taxable value, "
            "CGST+SGST (same state) or IGST (other state) and totals are calculated automatically.",
            "Type the amount in words, then print (File → Print, A4, 'Fit sheet on one page') or save as PDF.",
            "Copy the invoice summary into 'Sales Register' — one row per invoice. 'Monthly Summary' fills itself "
            "and gives you the numbers for GSTR-1 / GSTR-3B.",
            "For the HSN-wise table in GSTR-1, log item lines in 'HSN Register'; 'HSN Summary' adds them up per HSN code.",
            "For the next invoice: File → Save As with a new name, or clear the yellow cells and change the invoice number.",
        ],
        [
            "Rates in the drop-down follow the GST rate structure in force from 22 September 2025 "
            "(0%, 0.25%, 3%, 5%, 18%, 40%). You can type any other rate if needed.",
            "If the buyer has a GSTIN the sale is B2B, otherwise B2C — the register marks this for you.",
            "Invoice numbers must be consecutive, unique for the financial year and at most 16 characters.",
            "If your turnover is above the e-invoicing limit (currently ₹5 crore), invoices must also be reported on the IRP.",
        ],
    )
    states = states_sheet(wb)

    # Settings
    s = wb.create_sheet("Settings", 1)
    title(s, "Your business details", "Fill once — used on every invoice", 2)
    label_rows(s, 4, [
        ("Business / trade name", "Your Business Name"),
        ("Address line 1", "Shop No., Street"),
        ("Address line 2", "City, State - PIN"),
        ("GSTIN", "06ABCDE1234F1Z5"),
        ("Your state (code - name)", "06 - Haryana"),
        ("Phone", "+91 "),
        ("Email", ""),
        ("Bank name", ""),
        ("Account number", ""),
        ("IFSC", ""),
        ("UPI ID (optional)", ""),
        ("Terms line", "Goods once sold will not be taken back. Subject to local jurisdiction."),
    ])
    dv = DataValidation(type="list", formula1=states, allow_blank=False)
    s.add_data_validation(dv)
    dv.add("B8")

    # Invoice
    ws = wb.create_sheet("Invoice", 2)
    widths = [5, 34, 11, 8, 7, 12, 8, 14, 7, 12, 12, 12, 14]
    for i, w in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.merge_cells("A1:M1")
    ws["A1"] = "TAX INVOICE"
    ws["A1"].font = Font(bold=True, size=16, color="FFFFFF")
    ws["A1"].fill = H_FILL
    ws["A1"].alignment = Alignment(horizontal="center")
    ws.merge_cells("A2:G2")
    ws["A2"] = "=Settings!B4"
    ws["A2"].font = Font(bold=True, size=14, color=NAVY)
    ws.merge_cells("A3:G3")
    ws["A3"] = '=Settings!B5&", "&Settings!B6'
    ws.merge_cells("A4:G4")
    ws["A4"] = '="GSTIN: "&Settings!B7&"   |   State: "&Settings!B8'
    ws.merge_cells("A5:G5")
    ws["A5"] = '="Ph: "&Settings!B9&"   "&Settings!B10'

    meta = [("Invoice No.", "INV/26-27/001"), ("Invoice date", None), ("Reverse charge", "No"), ("Supply type", None)]
    for i, (k, v) in enumerate(meta):
        r = 2 + i
        ws.merge_cells(start_row=r, start_column=9, end_row=r, end_column=10)
        ws.cell(row=r, column=9, value=k).font = Font(bold=True)
        ws.merge_cells(start_row=r, start_column=11, end_row=r, end_column=13)
        c = ws.cell(row=r, column=11, value=v)
        c.border = BOX
        if k != "Supply type":
            c.fill = IN_FILL
    ws["K3"].number_format = DATE
    ws["K3"] = "=TODAY()"

    ws["A7"] = "Bill to"
    ws["A7"].font = Font(bold=True, color=NAVY)
    buyer = [("Name", ""), ("Address", ""), ("GSTIN (blank if unregistered)", ""), ("Place of supply", "06 - Haryana")]
    for i, (k, v) in enumerate(buyer):
        r = 8 + i
        ws.merge_cells(start_row=r, start_column=2, end_row=r, end_column=3)
        ws.cell(row=r, column=2, value=k).font = Font(bold=True)
        ws.merge_cells(start_row=r, start_column=4, end_row=r, end_column=10)
        c = ws.cell(row=r, column=4, value=v)
        c.fill = IN_FILL
        c.border = BOX
    dvp = DataValidation(type="list", formula1=states, allow_blank=False)
    ws.add_data_validation(dvp)
    dvp.add("D11")
    # Supply type follows the place of supply (D11) vs your own state
    ws["K5"] = '=IF(D11="","",IF(LEFT(D11,2)=LEFT(Settings!B8,2),"Intra-state (CGST+SGST)","Inter-state (IGST)"))'

    hdr = ["#", "Description of goods / services", "HSN/SAC", "Qty", "Unit", "Rate", "Disc %", "Taxable value",
           "GST %", "CGST", "SGST/UTGST", "IGST", "Total"]
    header(ws, 13, hdr)
    first, last = 14, 28
    dvr = DataValidation(type="list", formula1=f'"{GST_RATES}"', allow_blank=True, showErrorMessage=False)
    ws.add_data_validation(dvr)
    for r in range(first, last + 1):
        ws.cell(row=r, column=1, value=r - first + 1)
        for col in (2, 3, 4, 5, 6, 7, 9):
            c = ws.cell(row=r, column=col)
            c.fill = IN_FILL
            c.border = BOX
        dvr.add(f"I{r}")
        ws.cell(row=r, column=8, value=f'=IF(D{r}="","",ROUND(D{r}*F{r}*(1-G{r}/100),2))')
        intra = 'LEFT($D$11,2)=LEFT(Settings!$B$8,2)'
        ws.cell(row=r, column=10, value=f'=IF(H{r}="","",IF({intra},ROUND(H{r}*I{r}/200,2),0))')
        ws.cell(row=r, column=11, value=f'=IF(H{r}="","",IF({intra},ROUND(H{r}*I{r}/200,2),0))')
        ws.cell(row=r, column=12, value=f'=IF(H{r}="","",IF({intra},0,ROUND(H{r}*I{r}/100,2)))')
        ws.cell(row=r, column=13, value=f'=IF(H{r}="","",H{r}+J{r}+K{r}+L{r})')
        for col in (6, 8, 10, 11, 12, 13):
            ws.cell(row=r, column=col).number_format = MONEY
        for col in (8, 10, 11, 12, 13):
            ws.cell(row=r, column=col).border = BOX
    t = last + 1
    ws.cell(row=t, column=2, value="Total").font = Font(bold=True)
    for col in (4, 8, 10, 11, 12, 13):
        L = get_column_letter(col)
        c = ws.cell(row=t, column=col, value=f"=SUM({L}{first}:{L}{last})")
        c.font = Font(bold=True)
        c.fill = TOT_FILL
        c.number_format = MONEY if col != 4 else "0.##"
        c.border = BOX
    ws.cell(row=t + 1, column=11, value="Round off").font = Font(bold=True)
    ws.merge_cells(start_row=t + 1, start_column=11, end_row=t + 1, end_column=12)
    ws.cell(row=t + 1, column=13, value=f"=ROUND(M{t},0)-M{t}").number_format = MONEY
    ws.cell(row=t + 2, column=11, value="GRAND TOTAL").font = Font(bold=True, color=NAVY)
    ws.merge_cells(start_row=t + 2, start_column=11, end_row=t + 2, end_column=12)
    g = ws.cell(row=t + 2, column=13, value=f"=ROUND(M{t},0)")
    g.font = Font(bold=True, size=13, color=NAVY)
    g.number_format = '"₹" #,##0.00'
    g.fill = TOT_FILL

    ws.cell(row=t + 1, column=1, value="Amount in words:").font = Font(bold=True)
    ws.merge_cells(start_row=t + 1, start_column=3, end_row=t + 1, end_column=9)
    ws.cell(row=t + 1, column=3, value="Rupees ______________ only").fill = IN_FILL
    ws.cell(row=t + 3, column=1, value="Bank details:").font = Font(bold=True)
    ws.merge_cells(start_row=t + 3, start_column=3, end_row=t + 3, end_column=9)
    ws.cell(row=t + 3, column=3, value='=Settings!B11&"  A/c "&Settings!B12&"  IFSC "&Settings!B13&IF(Settings!B14<>"","  UPI "&Settings!B14,"")')
    ws.merge_cells(start_row=t + 4, start_column=1, end_row=t + 4, end_column=9)
    ws.cell(row=t + 4, column=1, value="=Settings!B15").font = Font(size=9, italic=True)
    ws.merge_cells(start_row=t + 4, start_column=10, end_row=t + 4, end_column=13)
    ws.cell(row=t + 4, column=10, value='="For "&Settings!B4').alignment = Alignment(horizontal="right")
    ws.merge_cells(start_row=t + 7, start_column=10, end_row=t + 7, end_column=13)
    ws.cell(row=t + 7, column=10, value="Authorised Signatory").alignment = Alignment(horizontal="right")
    ws.print_area = f"A1:M{t + 7}"
    ws.page_setup.orientation = "landscape"
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 1
    ws.sheet_properties.pageSetUpPr.fitToPage = True

    # Sales register
    sr = wb.create_sheet("Sales Register")
    title(sr, "Sales Register", "One row per invoice. Taxable value and tax come from the invoice totals.", 12)
    header(sr, 4, ["Date", "Invoice No.", "Customer", "Customer GSTIN", "Place of supply", "Taxable value",
                   "CGST", "SGST", "IGST", "Invoice total", "B2B / B2C", "Month"],
           [12, 16, 28, 18, 24, 14, 12, 12, 12, 14, 10, 10])
    for r in range(5, 505):
        input_block(sr, r, r, range(1, 10))
        sr.cell(row=r, column=1).number_format = DATE
        sr.cell(row=r, column=10, value=f'=IF(F{r}="","",F{r}+G{r}+H{r}+I{r})')
        sr.cell(row=r, column=11, value=f'=IF(F{r}="","",IF(D{r}<>"","B2B","B2C"))')
        sr.cell(row=r, column=12, value=f'=IF(A{r}="","",TEXT(A{r},"mmm-yy"))')
        for col in range(6, 11):
            sr.cell(row=r, column=col).number_format = MONEY
    sr.freeze_panes = "A5"
    dvs = DataValidation(type="list", formula1=states, allow_blank=True)
    sr.add_data_validation(dvs)
    dvs.add("E5:E504")

    # Monthly summary
    ms = wb.create_sheet("Monthly Summary")
    title(ms, "Monthly GST Summary — FY 2026-27", "Filled automatically from the Sales Register", 9)
    header(ms, 4, ["Month", "Invoices", "Taxable value", "CGST", "SGST", "IGST", "Total tax", "B2B taxable", "B2C taxable"],
           [12, 10, 16, 14, 14, 14, 14, 16, 16])
    rng = "'Sales Register'!$A$5:$A$504"
    for i, (y, m) in enumerate(FY_MONTHS):
        r = 5 + i
        ms.cell(row=r, column=1, value=f"=DATE({y},{m},1)").number_format = "mmm-yy"
        crit = f'{rng},">="&A{r},{rng},"<="&EOMONTH(A{r},0)'
        ms.cell(row=r, column=2, value=f"=COUNTIFS({crit})")
        for col, src in ((3, "F"), (4, "G"), (5, "H"), (6, "I")):
            ms.cell(row=r, column=col, value=f"=SUMIFS('Sales Register'!${src}$5:${src}$504,{crit})")
        ms.cell(row=r, column=7, value=f"=D{r}+E{r}+F{r}")
        ms.cell(row=r, column=8, value=f"=SUMIFS('Sales Register'!$F$5:$F$504,{crit},'Sales Register'!$K$5:$K$504,\"B2B\")")
        ms.cell(row=r, column=9, value=f"=SUMIFS('Sales Register'!$F$5:$F$504,{crit},'Sales Register'!$K$5:$K$504,\"B2C\")")
        for col in range(3, 10):
            ms.cell(row=r, column=col).number_format = MONEY
    tr = 5 + len(FY_MONTHS)
    ms.cell(row=tr, column=1, value="Total").font = Font(bold=True)
    for col in range(2, 10):
        L = get_column_letter(col)
        c = ms.cell(row=tr, column=col, value=f"=SUM({L}5:{L}{tr - 1})")
        c.font = Font(bold=True)
        c.fill = TOT_FILL
        c.number_format = MONEY if col > 2 else "0"

    # HSN register + summary
    hr = wb.create_sheet("HSN Register")
    title(hr, "HSN Register (item lines)", "Log each invoice line here for the GSTR-1 HSN table", 9)
    header(hr, 4, ["Date", "Invoice No.", "HSN/SAC", "Description", "UQC (unit)", "Qty", "Taxable value", "GST %", "Tax amount"],
           [12, 16, 12, 30, 10, 10, 14, 8, 14])
    for r in range(5, 1005):
        input_block(hr, r, r, range(1, 9))
        hr.cell(row=r, column=1).number_format = DATE
        hr.cell(row=r, column=9, value=f'=IF(G{r}="","",ROUND(G{r}*H{r}/100,2))').number_format = MONEY
        hr.cell(row=r, column=7).number_format = MONEY
    hr.freeze_panes = "A5"

    hs = wb.create_sheet("HSN Summary")
    title(hs, "HSN-wise Summary", "Type each HSN code once in column A — totals fill in automatically", 5)
    header(hs, 4, ["HSN/SAC", "Description", "Total qty", "Taxable value", "Tax amount"], [14, 34, 12, 16, 16])
    for r in range(5, 45):
        input_block(hs, r, r, (1, 2))
        hs.cell(row=r, column=3, value=f"=IF(A{r}=\"\",\"\",SUMIF('HSN Register'!$C$5:$C$1004,A{r},'HSN Register'!$F$5:$F$1004))")
        hs.cell(row=r, column=4, value=f"=IF(A{r}=\"\",\"\",SUMIF('HSN Register'!$C$5:$C$1004,A{r},'HSN Register'!$G$5:$G$1004))").number_format = MONEY
        hs.cell(row=r, column=5, value=f"=IF(A{r}=\"\",\"\",SUMIF('HSN Register'!$C$5:$C$1004,A{r},'HSN Register'!$I$5:$I$1004))").number_format = MONEY

    wb.active = 1
    wb.save(OUT / "GST-Invoice-Billing-Kit.xlsx")


# ---------------------------------------------------------- Bookkeeping kit --

EXPENSE_HEADS = [
    "Rent", "Salary & Wages", "Electricity", "Telephone & Internet", "Travel & Conveyance", "Office Expenses",
    "Printing & Stationery", "Repairs & Maintenance", "Professional Fees", "Bank Charges", "Advertising",
    "Freight & Cartage", "Insurance", "Interest", "Miscellaneous",
]


def bookkeeping_kit():
    wb = Workbook()
    how_to(
        wb,
        "Small Business Bookkeeping Kit",
        [
            "In 'Settings' enter your business name and the opening cash and bank balance on 1 April 2026.",
            "Record every cash receipt/payment in 'Cash Book' and every bank entry in 'Bank Book' — the balance runs automatically.",
            "Record each sale bill in 'Sales Register' and each purchase bill in 'Purchase Register'.",
            "Record expenses (rent, salary, electricity...) in 'Expenses' and choose the head from the drop-down.",
            "In the Purchase Register mark whether the bill appears in your GSTR-2B — 'ITC Tracker' then shows the month-wise gap.",
            "Open 'P&L Summary' any time to see month-wise sales, purchases, expenses and profit.",
            "Share this file with your CA at year end — everything is already classified.",
        ],
        [
            "If a sale/purchase is paid in cash or bank, also enter it in the Cash/Bank Book so balances stay correct.",
            "Profit shown is an estimate (no stock valuation or depreciation) — your CA will finalise it.",
            "Cash expenses above ₹10,000 paid to one person in a day are not allowed as a deduction (Income Tax rule) — pay by bank.",
        ],
    )
    s = wb.create_sheet("Settings", 1)
    title(s, "Settings", None, 2)
    label_rows(s, 3, [
        ("Business name", "Your Business Name"),
        ("Financial year", "FY 2026-27"),
        ("Opening cash balance (1 Apr 2026)", 0),
        ("Opening bank balance (1 Apr 2026)", 0),
    ])
    heads = wb.create_sheet("Heads")
    heads["A1"] = "Expense heads (edit if you like)"
    heads["A1"].font = Font(bold=True)
    heads.column_dimensions["A"].width = 30
    for i, h in enumerate(EXPENSE_HEADS, start=2):
        heads.cell(row=i, column=1, value=h).fill = IN_FILL
    head_rng = f"Heads!$A$2:$A${len(EXPENSE_HEADS) + 1}"

    def book(name, opening_ref, extra_col=None):
        ws = wb.create_sheet(name)
        title(ws, name, "Balance is calculated automatically", 7)
        cols = ["Date", "Particulars", "Voucher / Ref"] + ([extra_col] if extra_col else []) + ["Receipt (In)", "Payment (Out)", "Balance"]
        header(ws, 4, cols, [12, 40, 14] + ([18] if extra_col else []) + [14, 14, 16])
        n_in = len(cols) - 3
        rc, pc, bc = n_in + 1, n_in + 2, n_in + 3
        R, P, B = get_column_letter(rc), get_column_letter(pc), get_column_letter(bc)
        ws.cell(row=5, column=2, value="Opening balance").font = Font(bold=True)
        ws.cell(row=5, column=bc, value=f"={opening_ref}").number_format = MONEY
        for r in range(6, 1006):
            input_block(ws, r, r, range(1, pc + 1))
            ws.cell(row=r, column=1).number_format = DATE
            ws.cell(row=r, column=rc).number_format = MONEY
            ws.cell(row=r, column=pc).number_format = MONEY
            ws.cell(row=r, column=bc,
                    value=f'=IF(AND({R}{r}="",{P}{r}=""),"",{opening_ref}+SUM({R}$6:{R}{r})-SUM({P}$6:{P}{r}))').number_format = MONEY
        ws.freeze_panes = "A6"

    book("Cash Book", "Settings!B5")
    book("Bank Book", "Settings!B6", "Cheque / UTR")

    sr = wb.create_sheet("Sales Register")
    title(sr, "Sales Register", None, 9)
    header(sr, 4, ["Date", "Invoice No.", "Customer", "GSTIN", "Taxable value", "CGST", "SGST", "IGST", "Total"],
           [12, 16, 30, 18, 14, 12, 12, 12, 14])
    for r in range(5, 1005):
        input_block(sr, r, r, range(1, 9))
        sr.cell(row=r, column=1).number_format = DATE
        sr.cell(row=r, column=9, value=f'=IF(E{r}="","",E{r}+F{r}+G{r}+H{r})')
        for col in range(5, 10):
            sr.cell(row=r, column=col).number_format = MONEY
    sr.freeze_panes = "A5"

    pr = wb.create_sheet("Purchase Register")
    title(pr, "Purchase Register", "Mark ITC eligibility and whether the bill shows in your GSTR-2B", 11)
    header(pr, 4, ["Date", "Bill No.", "Supplier", "Supplier GSTIN", "Taxable value", "CGST", "SGST", "IGST", "Total",
                   "ITC eligible? (Y/N)", "In GSTR-2B? (Y/N)"],
           [12, 16, 30, 18, 14, 12, 12, 12, 14, 12, 12])
    yn = DataValidation(type="list", formula1='"Y,N"', allow_blank=True)
    pr.add_data_validation(yn)
    yn.add("J5:K1004")
    for r in range(5, 1005):
        input_block(pr, r, r, list(range(1, 9)) + [10, 11])
        pr.cell(row=r, column=1).number_format = DATE
        pr.cell(row=r, column=9, value=f'=IF(E{r}="","",E{r}+F{r}+G{r}+H{r})')
        for col in range(5, 10):
            pr.cell(row=r, column=col).number_format = MONEY
    pr.freeze_panes = "A5"

    ex = wb.create_sheet("Expenses")
    title(ex, "Expenses", "Pick the head from the drop-down", 6)
    header(ex, 4, ["Date", "Expense head", "Paid to", "Amount", "Mode (Cash/Bank/UPI)", "Remarks"], [12, 24, 28, 14, 16, 30])
    dvh = DataValidation(type="list", formula1=head_rng, allow_blank=True)
    ex.add_data_validation(dvh)
    dvh.add("B5:B1004")
    mode = DataValidation(type="list", formula1='"Cash,Bank,UPI,Card"', allow_blank=True)
    ex.add_data_validation(mode)
    mode.add("E5:E1004")
    for r in range(5, 1005):
        input_block(ex, r, r, range(1, 7))
        ex.cell(row=r, column=1).number_format = DATE
        ex.cell(row=r, column=4).number_format = MONEY
    ex.freeze_panes = "A5"

    it = wb.create_sheet("ITC Tracker")
    title(it, "ITC Tracker — books vs GSTR-2B", "Difference = ITC you booked that is not yet in GSTR-2B (follow up with the supplier)", 5)
    header(it, 4, ["Month", "Eligible ITC in books", "ITC reflected in GSTR-2B", "Difference", "Status"], [12, 20, 22, 16, 30])
    pd = "'Purchase Register'!$A$5:$A$1004"
    tax = "('Purchase Register'!$F$5:$F$1004+'Purchase Register'!$G$5:$G$1004+'Purchase Register'!$H$5:$H$1004)"
    for i, (y, m) in enumerate(FY_MONTHS):
        r = 5 + i
        it.cell(row=r, column=1, value=f"=DATE({y},{m},1)").number_format = "mmm-yy"
        inmonth = f"({pd}>=A{r})*({pd}<=EOMONTH(A{r},0))"
        it.cell(row=r, column=2, value=f"=SUMPRODUCT({inmonth}*('Purchase Register'!$J$5:$J$1004=\"Y\")*{tax})").number_format = MONEY
        it.cell(row=r, column=3, value=f"=SUMPRODUCT({inmonth}*('Purchase Register'!$J$5:$J$1004=\"Y\")*('Purchase Register'!$K$5:$K$1004=\"Y\")*{tax})").number_format = MONEY
        it.cell(row=r, column=4, value=f"=B{r}-C{r}").number_format = MONEY
        it.cell(row=r, column=5, value=f'=IF(B{r}=0,"",IF(D{r}=0,"All matched","Follow up with suppliers"))')

    pl = wb.create_sheet("P&L Summary")
    title(pl, "Profit & Loss Summary — FY 2026-27", "Estimated, from your registers (taxable values, excluding GST)", 14)
    pl.column_dimensions["A"].width = 26
    pl.cell(row=4, column=1, value="Particulars")
    for i, (y, m) in enumerate(FY_MONTHS):
        c = pl.cell(row=4, column=2 + i, value=f"=DATE({y},{m},1)")
        c.number_format = "mmm-yy"
        pl.column_dimensions[get_column_letter(2 + i)].width = 12
    pl.cell(row=4, column=14, value="Total")
    pl.column_dimensions["N"].width = 14
    for col in range(1, 15):
        c = pl.cell(row=4, column=col)
        c.font = H_FONT
        c.fill = H_FILL
        c.alignment = Alignment(horizontal="center")

    def month_sum(sheet, amount_col, r_col, extra=""):
        rng = f"'{sheet}'!$A$5:$A$1004"
        return (f"=SUMIFS('{sheet}'!${amount_col}$5:${amount_col}$1004,{rng},\">=\"&{r_col}$4,"
                f"{rng},\"<=\"&EOMONTH({r_col}$4,0){extra})")

    rows = [("Sales", "Sales Register", "E", "")]
    rows.append(("Purchases", "Purchase Register", "E", ""))
    r = 5
    for label, sheet, col, extra in rows:
        pl.cell(row=r, column=1, value=label).font = Font(bold=True)
        for i in range(12):
            L = get_column_letter(2 + i)
            pl.cell(row=r, column=2 + i, value=month_sum(sheet, col, L, extra)).number_format = MONEY
        r += 1
    pl.cell(row=r, column=1, value="Gross profit").font = Font(bold=True, color=NAVY)
    for i in range(12):
        L = get_column_letter(2 + i)
        c = pl.cell(row=r, column=2 + i, value=f"={L}5-{L}6")
        c.number_format = MONEY
        c.fill = TOT_FILL
    gp_row = r
    r += 2
    first_exp = r
    for h_i, h in enumerate(EXPENSE_HEADS):
        pl.cell(row=r, column=1, value=f"=Heads!A{h_i + 2}")
        for i in range(12):
            L = get_column_letter(2 + i)
            pl.cell(row=r, column=2 + i, value=month_sum("Expenses", "D", L, f",'Expenses'!$B$5:$B$1004,$A{r}")).number_format = MONEY
        r += 1
    pl.cell(row=r, column=1, value="Total expenses").font = Font(bold=True)
    for i in range(12):
        L = get_column_letter(2 + i)
        c = pl.cell(row=r, column=2 + i, value=f"=SUM({L}{first_exp}:{L}{r - 1})")
        c.number_format = MONEY
        c.fill = TOT_FILL
    te_row = r
    r += 2
    pl.cell(row=r, column=1, value="NET PROFIT").font = Font(bold=True, size=12, color=NAVY)
    for i in range(12):
        L = get_column_letter(2 + i)
        c = pl.cell(row=r, column=2 + i, value=f"={L}{gp_row}-{L}{te_row}")
        c.number_format = MONEY
        c.font = Font(bold=True)
        c.fill = PatternFill("solid", fgColor="E7F5EC")
    for rr in range(5, r + 1):
        if pl.cell(row=rr, column=2).value is not None:
            c = pl.cell(row=rr, column=14, value=f"=SUM(B{rr}:M{rr})")
            c.number_format = MONEY
            c.font = Font(bold=True)
    pl.freeze_panes = "B5"

    wb.active = 1
    wb.save(OUT / "Small-Business-Bookkeeping-Kit.xlsx")


# -------------------------------------------------------- Rent receipt kit --

def rent_receipt_kit():
    wb = Workbook()
    how_to(
        wb,
        "Rent Receipt & HRA Kit",
        [
            "Fill the yellow cells in 'Details' — your name, landlord's name and PAN, address, monthly rent and payment mode.",
            "Open 'Receipts' — 12 monthly receipts (April 2026 to March 2027) are ready. Print on A4.",
            "Get each receipt signed by the landlord. If rent is paid in cash and is more than ₹5,000, a ₹1 revenue stamp is needed.",
            "Submit the receipts to your employer with the investment declaration (Form 12BB), or keep them for your ITR.",
            "Open 'HRA Check' to see how much HRA is exempt and whether the landlord's PAN is required.",
        ],
        [
            "Landlord's PAN is required if the rent you pay is more than ₹1,00,000 in the year.",
            "HRA exemption is available only in the OLD tax regime.",
            "Metro cities for the 50% limit: Delhi, Mumbai, Kolkata and Chennai.",
            "Paying rent to parents is allowed if they own the house and show the rent in their own ITR. Rent to a spouse is generally not accepted.",
        ],
    )
    d = wb.create_sheet("Details", 1)
    title(d, "Details for your rent receipts", None, 2)
    label_rows(d, 3, [
        ("Tenant name (you)", "Your Name"),
        ("Landlord name", "Landlord Name"),
        ("Landlord PAN", "ABCDE1234F"),
        ("Rented house address", "House No., Street, City, PIN"),
        ("Monthly rent (₹)", 15000),
        ("Payment mode", "Bank transfer"),
        ("First month of rent", None),
        ("Metro city? (Y/N)", "N"),
        ("Annual Basic + DA (₹)", 600000),
        ("Annual HRA received (₹)", 240000),
    ])
    d["B9"] = "=DATE(2026,4,1)"
    d["B9"].number_format = "mmmm yyyy"
    d["B9"].fill = IN_FILL
    mode = DataValidation(type="list", formula1='"Bank transfer,UPI,Cheque,Cash"', allow_blank=False)
    d.add_data_validation(mode)
    mode.add("B8")
    yn = DataValidation(type="list", formula1='"Y,N"', allow_blank=False)
    d.add_data_validation(yn)
    yn.add("B10")

    r = wb.create_sheet("Receipts", 2)
    r.column_dimensions["A"].width = 3
    r.column_dimensions["B"].width = 95
    row = 1
    for i in range(12):
        top = row
        r.cell(row=row, column=2, value="RENT RECEIPT").font = Font(bold=True, size=13, color=NAVY)
        r.cell(row=row, column=2).alignment = Alignment(horizontal="center")
        row += 1
        r.cell(row=row, column=2, value=f'="Receipt No. {i + 1:02d}     Date: "&TEXT(EOMONTH(Details!$B$9,{i}),"dd-mm-yyyy")')
        row += 1
        c = r.cell(
            row=row,
            column=2,
            value=(
                f'="Received with thanks from "&Details!$B$3&" a sum of Rs. "&TEXT(Details!$B$7,"#,##0")&"/- "'
                f'&"by "&LOWER(Details!$B$8)&" towards rent for the month of "&TEXT(EDATE(Details!$B$9,{i}),"mmmm yyyy")'
                f'&" for the residential premises at "&Details!$B$6&"."'
            ),
        )
        c.alignment = Alignment(wrap_text=True, vertical="top")
        r.row_dimensions[row].height = 48
        row += 1
        r.cell(row=row, column=2, value='="Landlord: "&Details!$B$4&"     PAN: "&IF(Details!$B$7*12>100000,Details!$B$5,"(not required)")')
        row += 1
        r.cell(row=row, column=2, value='=IF(AND(Details!$B$8="Cash",Details!$B$7>5000),"[ Affix ₹1 revenue stamp ]                                        Signature of landlord","                                                                          Signature of landlord")')
        row += 1
        for rr in range(top, row):
            r.cell(row=rr, column=2).border = Border(
                left=thin, right=thin,
                top=thin if rr == top else None,
                bottom=thin if rr == row - 1 else None,
            )
        row += 2
        if i % 3 == 2:
            r.row_breaks.append(Break(id=row - 1))
    r.page_setup.paperSize = r.PAPERSIZE_A4
    r.page_setup.fitToWidth = 1
    r.sheet_properties.pageSetUpPr.fitToPage = True
    r.page_setup.fitToHeight = 0

    h = wb.create_sheet("HRA Check", 3)
    title(h, "HRA exemption check (old regime)", "Exemption = least of the three amounts below", 2)
    h.column_dimensions["A"].width = 52
    h.column_dimensions["B"].width = 20
    rows = [
        ("Annual rent paid", "=Details!B7*12"),
        ("1. Actual HRA received", "=Details!B12"),
        ("2. Rent paid minus 10% of Basic+DA", "=MAX(0,B4-10%*Details!B11)"),
        ("3. 50% (metro) / 40% (non-metro) of Basic+DA", '=IF(Details!B10="Y",50%,40%)*Details!B11'),
        ("HRA EXEMPT (least of 1, 2, 3)", "=MIN(B5,B6,B7)"),
        ("HRA taxable", "=B5-B8"),
        ("Landlord PAN needed?", '=IF(B4>100000,"Yes — rent is above ₹1,00,000 a year","No")'),
    ]
    for i, (k, f) in enumerate(rows):
        rr = 4 + i
        h.cell(row=rr, column=1, value=k).font = Font(bold=(i in (4, 6)))
        c = h.cell(row=rr, column=2, value=f)
        c.border = BOX
        if i < 6:
            c.number_format = MONEY
        if i == 4:
            c.fill = PatternFill("solid", fgColor="E7F5EC")
            c.font = Font(bold=True)

    wb.active = 1
    wb.save(OUT / "Rent-Receipt-HRA-Kit.xlsx")


# -------------------------------------------------------- Notice reply kit --

def notice_reply_kit():
    doc = Document()
    st = doc.styles["Normal"]
    st.font.name = "Calibri"
    st.font.size = Pt(11)

    def h(text, level=1):
        p = doc.add_heading(text, level=level)
        for run in p.runs:
            run.font.color.rgb = RGBColor(0x00, 0x2B, 0x5C)
        return p

    def para(text, bold=False, italic=False, size=None):
        p = doc.add_paragraph()
        run = p.add_run(text)
        run.bold = bold
        run.italic = italic
        if size:
            run.font.size = Pt(size)
        return p

    def bullets(items):
        for it in items:
            doc.add_paragraph(it, style="List Bullet")

    def letter_head(subject, ref):
        para("[YOUR BUSINESS NAME]\n[Address]\nGSTIN: [__________]     Phone: [__________]     Email: [__________]", bold=True)
        para("Date: [DD-MM-YYYY]")
        para("To,\nThe Proper Officer / [Designation],\n[Ward / Range / Circle],\n[State GST / CGST Office Address]")
        para(f"Subject: {subject}", bold=True)
        para(f"Reference: {ref}")
        para("Respected Sir / Madam,")

    def sign_off(prayer):
        h("Prayer", 3)
        para(prayer)
        para("We also request an opportunity of personal hearing before any adverse view is taken, as required by "
             "the principles of natural justice.")
        para("Verification: I/We hereby solemnly affirm that the information given above is true and correct to the "
             "best of my/our knowledge and belief, and nothing has been concealed therefrom.")
        para("Thanking you,\nYours faithfully,\n\nFor [YOUR BUSINESS NAME]\n\n\n(Authorised Signatory)\nName: [__________]\n"
             "Designation: [Proprietor / Partner / Director]")
        para("Enclosures: [list each document annexed — e.g. Annexure A: reconciliation statement; Annexure B: "
             "copies of invoices; Annexure C: GSTR-2B extract]", italic=True)
        doc.add_page_break()

    # Cover
    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = t.add_run("GST Notice Reply Formats")
    run.bold = True
    run.font.size = Pt(26)
    run.font.color.rgb = RGBColor(0x00, 0x2B, 0x5C)
    s = doc.add_paragraph()
    s.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r2 = s.add_run("Ready-to-edit drafts for the most common GST notices\n" + FIRM)
    r2.font.color.rgb = RGBColor(0xD9, 0x9A, 0x2B)

    h("How to use these formats")
    bullets([
        "Read the notice carefully: note its form (ASMT-10, REG-17, DRC-01A...), reference number, date, tax period "
        "and the last date to reply.",
        "Pick the matching format below. Replace everything in [square brackets] and delete the explanations that do "
        "not apply to you.",
        "Give a point-wise reply to every discrepancy raised — never leave a point unanswered.",
        "Attach supporting documents (reconciliation, invoices, GSTR-2B extract, bank statements) and number them "
        "as annexures.",
        "File the reply on the GST portal: Services → User Services → View Notices and Orders (or View Additional "
        "Notices/Orders), in the form mentioned in the notice, and save the acknowledgement.",
        "If you agree with part of the demand, pay it with interest through Form DRC-03 and mention the ARN in your reply.",
    ])
    h("Time limits to watch", 2)
    bullets([
        "ASMT-10 (scrutiny of returns): reply in Form ASMT-11 within the time given in the notice — normally 30 days.",
        "REG-17 (show cause for cancellation): reply in Form REG-18 within 7 working days.",
        "DRC-01A (intimation before show cause notice): reply in Part B by the date mentioned in the intimation.",
        "Missed the date? Reply anyway with an adjournment request (Format 6) — silence usually leads to an ex-parte order.",
    ])
    para("Important: These formats are drafting aids based on common situations. Every notice turns on its own "
         "facts and documents. Where the amount involved is significant, or a show cause notice / demand order has "
         "been issued, get the reply reviewed by a professional.", italic=True)
    doc.add_page_break()

    # 1. ASMT-10
    h("Format 1 — Reply to Notice in Form GST ASMT-10 (Scrutiny of Returns)")
    para("Filed in Form GST ASMT-11 under Section 61 of the CGST Act, 2017 read with Rule 99.", italic=True)
    letter_head(
        "Reply to notice in Form GST ASMT-10 for the period [MM/YYYY – MM/YYYY]",
        "Notice No. [__________] dated [DD-MM-YYYY]; GSTIN [__________]",
    )
    para("1. We refer to the above notice in which certain discrepancies have been pointed out in the returns filed "
         "by us for the period [__________]. We thank your good office for the opportunity to explain, and submit "
         "our point-wise reply as under.")
    table = doc.add_table(rows=1, cols=4)
    table.style = "Light Grid Accent 1"
    hdr = table.rows[0].cells
    for i, t in enumerate(["S.No.", "Discrepancy as per notice", "Our explanation", "Supporting document"]):
        hdr[i].text = t
    for n in range(1, 4):
        row = table.add_row().cells
        row[0].text = str(n)
        row[1].text = "[Copy the discrepancy exactly as stated, with amount]"
        row[2].text = "[Explain — see sample explanations below]"
        row[3].text = f"Annexure [{chr(64 + n)}]"
    para("")
    para("Sample explanations (use only those that are true for you):", bold=True)
    bullets([
        "The difference is due to invoices of [month] reported in GSTR-1 of [later month] through amendment; tax on "
        "them was paid in GSTR-3B of [month]. Reconciliation at Annexure [ ].",
        "Credit notes of ₹[ ] issued under Section 34 were reported in GSTR-1 but adjusted in GSTR-3B of [month].",
        "The amount was a typographical error in Table [ ] of GSTR-3B; the correct liability was paid in [month] "
        "(DRC-03 ARN [ ] / GSTR-3B of [month]).",
        "Input tax credit claimed relates to invoices uploaded late by the supplier; all conditions of Section 16 "
        "are met and the credit was claimed within the time limit of Section 16(4).",
        "The turnover difference with e-way bills is due to e-way bills generated for [job work / stock transfer / "
        "returns / cancelled invoices], which are not supplies.",
    ])
    para("2. In view of the above, the discrepancies stand fully explained. Where any short payment was found, we "
         "have paid tax of ₹[ ] with interest of ₹[ ] vide DRC-03 ARN [ ] dated [ ].")
    sign_off("We therefore request your good office to accept this explanation and drop the proceedings, as "
             "provided in Section 61(2) of the CGST Act, 2017 and Rule 99(2), by issuing Form GST ASMT-12.")

    # 2. GSTR-1 vs 3B
    h("Format 2 — Reply on Mismatch between GSTR-1 and GSTR-3B (Output Tax)")
    letter_head(
        "Explanation for difference between outward supplies reported in GSTR-1 and GSTR-3B for [period]",
        "Notice / Intimation No. [__________] dated [DD-MM-YYYY]; GSTIN [__________]",
    )
    para("1. The notice points out that tax liability in GSTR-1 (₹[ ]) is higher than tax paid in GSTR-3B (₹[ ]), "
         "a difference of ₹[ ].")
    para("2. The month-wise reconciliation is attached as Annexure A. The difference arises for these reasons:")
    table = doc.add_table(rows=1, cols=3)
    table.style = "Light Grid Accent 1"
    for i, t in enumerate(["Reason", "Amount (₹)", "Where the tax is paid / adjusted"]):
        table.rows[0].cells[i].text = t
    for reason in ["Invoices amended in later GSTR-1", "Credit notes / debit notes timing", "Advances received and adjusted",
                   "Duplicate / wrongly reported invoices in GSTR-1", "Balance short payment (if any)"]:
        row = table.add_row().cells
        row[0].text = reason
        row[1].text = "[ ]"
        row[2].text = "[GSTR-3B of month / DRC-03 ARN]"
    para("")
    para("3. The balance difference of ₹[ ], if any, has been paid with applicable interest under Section 50 through "
         "DRC-03 ARN [ ].")
    sign_off("We request that the reconciliation be accepted and no further liability be proposed for the period.")

    # 3. ITC mismatch
    h("Format 3 — Reply on Excess ITC: GSTR-3B vs GSTR-2A/2B")
    para("Use for scrutiny notices, and for the Part B reply to an intimation in Form DRC-01C (Rule 88D).", italic=True)
    letter_head(
        "Explanation for input tax credit claimed in GSTR-3B in excess of GSTR-2B for [period]",
        "Notice / DRC-01C reference No. [__________] dated [DD-MM-YYYY]; GSTIN [__________]",
    )
    para("1. The notice states that ITC of ₹[ ] claimed in GSTR-3B exceeds the ITC available in GSTR-2B by ₹[ ]. "
         "Supplier-wise reconciliation is enclosed as Annexure A.")
    para("2. The difference is explained as follows:", bold=True)
    bullets([
        "ITC of ₹[ ] relates to invoices uploaded by suppliers in a later period (list with GSTIN, invoice no., "
        "date and the period in which they appear in GSTR-2B at Annexure B).",
        "ITC of ₹[ ] is on imports of goods (Bill of Entry no. [ ]), which is claimed on the basis of the Bill of "
        "Entry and appears in GSTR-2B only through ICEGATE data.",
        "ITC of ₹[ ] was claimed under reverse charge after paying the tax in cash; it does not appear in GSTR-2B "
        "by design.",
        "ITC of ₹[ ] was reversed in GSTR-3B of [month] (Table 4B) under Rule 37 / 42 / 43; net ITC availed is "
        "therefore within GSTR-2B.",
    ])
    para("3. All conditions of Section 16(2) — possession of tax invoice, receipt of goods/services, payment of tax "
         "by supplier and filing of return — are satisfied, and the credit was availed within the time limit of "
         "Section 16(4).")
    para("4. For the balance of ₹[ ] for which no supporting document is available, we have reversed/paid the ITC "
         "with interest through DRC-03 ARN [ ].")
    sign_off("We request your good office to accept the above explanation and drop the proceedings.")

    # 4. REG-17
    h("Format 4 — Reply to Show Cause Notice for Cancellation of Registration (Form GST REG-17)")
    para("Reply in Form GST REG-18 within 7 working days (Rule 22).", italic=True)
    letter_head(
        "Reply to show cause notice in Form GST REG-17 for cancellation of registration",
        "SCN reference No. [__________] dated [DD-MM-YYYY]; GSTIN [__________]",
    )
    para("1. The notice proposes cancellation of our registration on the ground that [copy the ground, e.g. "
         "'returns have not been furnished for a continuous period of six months' / 'the business is not being "
         "conducted from the declared place of business'].")
    para("2. Our reply (keep the one that applies):", bold=True)
    bullets([
        "Non-filing of returns: All pending returns up to [month] have since been filed along with late fee and "
        "interest (ARNs listed at Annexure A). There is no return pending as on date.",
        "Place of business: We continue to carry on business from [address]. Photographs of the premises with name "
        "board, the latest electricity bill, rent agreement and recent purchase/sale invoices are enclosed as "
        "Annexure B. We shall be happy to facilitate a physical verification.",
        "Other grounds: [explain with documents].",
    ])
    para("3. The business is active and we intend to comply with all provisions of the Act going forward.")
    sign_off("We request that the show cause notice be dropped by issuing an order in Form GST REG-20 and that "
             "our registration be continued. If the registration has been suspended, we request that the "
             "suspension be revoked.")

    # 5. DRC-01A
    h("Format 5 — Reply to Intimation in Form GST DRC-01A (before Show Cause Notice)")
    para("Filed in Part B of DRC-01A. Either pay the ascertained amount through DRC-03, or give your submissions "
         "against it — or both, for different parts.", italic=True)
    letter_head(
        "Submissions against intimation of tax ascertained in Form GST DRC-01A for [period]",
        "Intimation No. [__________] dated [DD-MM-YYYY]; GSTIN [__________]",
    )
    para("1. By the above intimation, tax of ₹[ ], interest of ₹[ ] and penalty of ₹[ ] has been ascertained on "
         "the ground that [summarise].")
    para("2. Part of the amount accepted (if any): We accept liability of ₹[ ] relating to [ ], which has been "
         "paid with interest vide DRC-03 ARN [ ] dated [ ].")
    para("3. Part of the amount not accepted: The balance of ₹[ ] is not payable for the following reasons:")
    bullets([
        "[Point 1 — facts, with reference to the annexure proving it]",
        "[Point 2 — legal provision relied upon, e.g. Section 16, Section 17(5), notification no.]",
        "[Point 3 — any calculation error in the intimation]",
    ])
    sign_off("We request that no show cause notice be issued for the amount not accepted, and that the "
             "proceedings for the amount paid be concluded under Section 73(6) / 74(6) (or the corresponding "
             "provision for the relevant period).")

    # 6. Adjournment
    h("Format 6 — Request for Adjournment / Extension of Time")
    letter_head(
        "Request for extension of time to file reply to notice dated [DD-MM-YYYY]",
        "Notice No. [__________]; GSTIN [__________]",
    )
    para("1. We have received the above notice requiring us to [file a reply / appear for personal hearing] by "
         "[date].")
    para("2. The records needed for a complete reply — [books of account / supplier confirmations / bank "
         "statements] — are being compiled and reconciled [/ our authorised signatory is unwell / our consultant is "
         "reviewing the matter]. A complete and correct reply needs some more time.")
    para("3. We therefore request an extension of [15] days, up to [date], to file our reply. We assure full "
         "cooperation. As per Section 75(5), adjournment may be granted for sufficient cause.")
    para("Thanking you,\nYours faithfully,\n\nFor [YOUR BUSINESS NAME]\n\n(Authorised Signatory)")
    doc.add_page_break()

    # 7. Cover letter
    h("Format 7 — Cover Letter for Submitting Documents")
    letter_head(
        "Submission of documents in connection with notice dated [DD-MM-YYYY]",
        "Notice No. [__________]; GSTIN [__________]",
    )
    para("With reference to the above notice [and the personal hearing held on (date)], we submit the following "
         "documents for your kind consideration:")
    table = doc.add_table(rows=1, cols=3)
    table.style = "Light Grid Accent 1"
    for i, t in enumerate(["Annexure", "Document", "Pages"]):
        table.rows[0].cells[i].text = t
    for a in "ABCD":
        row = table.add_row().cells
        row[0].text = a
        row[1].text = "[ ]"
        row[2].text = "[ ]"
    para("")
    para("We request that these documents be taken on record. We shall be glad to furnish any further information "
         "required.")
    para("Thanking you,\nYours faithfully,\n\nFor [YOUR BUSINESS NAME]\n\n(Authorised Signatory)")

    para("")
    para("Need help with a notice? Rajput Lalit & Associates drafts and files GST notice replies — "
         "WhatsApp +91 93549 53603 · www.rajputlalitassociates.in/gst-notice-reply", bold=True)

    doc.save(OUT / "GST-Notice-Reply-Formats.docx")


if __name__ == "__main__":
    gst_invoice_kit()
    bookkeeping_kit()
    rent_receipt_kit()
    notice_reply_kit()
    for f in sorted(OUT.iterdir()):
        print(f"{f.name}: {f.stat().st_size:,} bytes")
