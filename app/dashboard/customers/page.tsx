export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Customers page</div>;
}
