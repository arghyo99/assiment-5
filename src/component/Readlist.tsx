import type { apiDataType } from "../type/type"

const Readlist = ({
  stack,
  onRemove,
  onRemoveAll,
}: {
  stack: apiDataType[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4 h-fit sticky top-5">

  
      <div>
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
        {stack.length === 0 ? (
          <p className="text-sm text-gray-400">No technologies selected yet.</p>
        ) : (
          <p className="text-sm text-gray-500">{stack.length} Technology Selected</p>
        )}
      </div>

      
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={item.icon} alt={item.name} width={32} height={32} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer text-lg"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

    
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full border border-red-400 text-red-500 py-2 rounded-xl font-medium hover:bg-red-50 transition-colors cursor-pointer"
        >
          Remove All
        </button>
      )}

    </div>
  )
}

export default Readlist