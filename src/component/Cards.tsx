import { use } from "react"
import type { apiDataType } from "../type/type"
import Card from "./Card"

const Cards = ({
  dataPromise,
  onAdd,
  stack,
}: {
  dataPromise: Promise<apiDataType[]>
  onAdd: (card: apiDataType) => void
  stack: apiDataType[]
}) => {
  const allCards = use(dataPromise)

  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {!allCards || allCards.length === 0 ? (
        <p className="col-span-3 text-center text-red-500">No data found</p>
      ) : (
        allCards.map((singelcard) => (
          <Card key={singelcard.id} card={singelcard} onAdd={onAdd} stack={stack} />
        ))
      )}
    </div>
  )
}

export default Cards