type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductsIdPage({ params }: Props) {
  const { id } = await params

  console.log(id)

  return <div>ProductsIdPage id {id}</div>
}