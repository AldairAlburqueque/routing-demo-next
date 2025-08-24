export default async function PageReview({
  params
}: { params: Promise<{ productId: string }>}) {
  const { productId } = await params;
  return (
    <>
      <li>Review {productId}</li>
    </>
  )
}