import { Suspense, useState } from "react"
import type { apiDataType } from "./type/type"
import Cards from "./component/Cards"
import ExploreText from "./component/ExploreText"
import Footer from "./component/Footer"
import HeroSection from "./component/HeroSection"
import Naveber from "./component/Naveber"
import Readlist from "./component/Readlist"
import Toast from "./component/Toast"

const facData = async () => {
  const res = await fetch('../public/alldata.json')
  const data = await res.json()
  return data
}

const dataPromise = facData()

function App() {
  const [stack, setStack] = useState<apiDataType[]>([])
  const [toast, setToast] = useState<string | null>(null)

  const showToast = (message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }

  const handleAdd = (card: apiDataType) => {
    if (!stack.find((item) => item.id === card.id)) {
      setStack([...stack, card])
      showToast(`${card.name} added to stack!`)
    }
  }

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id))
  }

  const handleRemoveAll = () => {
    setStack([])
  }

  return (
    <>
      <Naveber />
      <HeroSection />
      <ExploreText />
      <main>
        <section className="mx-auto container my-20 px-4">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-5">
            <Suspense fallback={<h2>Loading.....</h2>}>
              <Cards dataPromise={dataPromise} onAdd={handleAdd} stack={stack} />
            </Suspense>
            <Readlist
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>
      <Footer />
      {toast && <Toast message={toast} />}
    </>
  )
}

export default App