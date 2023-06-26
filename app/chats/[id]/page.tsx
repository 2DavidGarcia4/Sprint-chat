export default function Chat({ params }: {params: {id: string}}){
  return (
    <div>
      {params.id}
    </div>
  )
}