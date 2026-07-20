const orderResponse = await fetch("/api/create-order", {
  method: "POST",
});

const orderData = await orderResponse.json();

console.log("ORDER RESPONSE:", orderData);

if (!orderResponse.ok || !orderData.success) {
  setMessage(
    orderData?.error?.description ||
    orderData?.message ||
    "Unable to create payment order."
  );
  setLoading(false);
  return;
}