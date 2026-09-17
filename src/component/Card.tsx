import type { apiDataType } from "../type/type"

const Card = ({
  card,
  onAdd,
  stack,
}: {
  card: apiDataType
  onAdd: (card: apiDataType) => void
  stack: apiDataType[]
}) => {
  const isAdded = stack.some((item) => item.id === card.id)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4 shadow-sm">

   
      <div className="flex items-center justify-between">
        <img src={card.icon} alt={card.name} width={44} height={44} />
        <span className="text-xs font-medium border rounded-full px-3 py-1 text-blue-500 border-blue-300">
          {card.badge}
        </span>
      </div>

      
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-900">{card.name}</h2>
        <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
      </div>

     
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="border border-gray-300 rounded-full px-3 py-1">{card.category}</span>
        <span className="border border-gray-300 rounded-full px-3 py-1">{card.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-yellow-500 font-medium">
          ⭐ {card.rating}
        </span>
      </div>


      <button
        onClick={() => onAdd(card)}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl font-medium transition-colors cursor-pointer
          ${isAdded
            ? "bg-green-500 text-white cursor-not-allowed opacity-80"
            : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
      >
        {isAdded ? "✓ Added" : "Add to Stack"}
      </button>

    </div>
  )
}

export default Card