import Category from "../components/Category"
import Popular from "../components/Popular"
import Search from "../components/Search"
import Veggie from "../components/Veggie"

export default function HomePage() {
  return (
    <>
      <Search />
      <Category />
      <Popular />
      <Veggie />
    </>
  )
}