export async function fetchSellerSignUp(
  options: BuyersSignup,
): Promise<Response> {
  const response = await fetch(BUYERS_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
  return response;
}
