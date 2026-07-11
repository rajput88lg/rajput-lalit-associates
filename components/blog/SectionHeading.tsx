interface Props {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-3xl font-bold text-[#002b5c] mt-14 mb-6">
      {children}
    </h2>
  );
}