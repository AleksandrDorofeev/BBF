import Container from "../components/Container";

import getProducts from "../actions/getProducts";
import Product from "../components/list/ListItem";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

const Products = async () => {
  const products = await getProducts();

  if (!products || !products.length) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((item, id) => {
            return (
              <Product key={id} {...item} />
          )})}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Products;