import React from 'react'
import { BookItemList } from '../components/BookItemList'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Container customClass='md:px-5'>
        <div className='mt-10 md:mt-7 py-5'>
          <div className='mb-2 md:flex items-baseline md:justify-between'>
            <h3 className="font-bold leading-tight text-3xl text-primary text-center md:text-left">List books</h3>
            <a className='hidden md:block text-yellow-500' href="#!"> View More </a>
          </div>

          <div className='list-book flex overflow-x-scroll lg:overflow-visible lg:justify-between py-6'>
            <BookItemList customClass='mr-3 lg:mx-1' />
            <BookItemList customClass='mr-3 lg:mx-1' />
            <BookItemList customClass='mr-3 lg:mx-1' />
            <BookItemList customClass='mr-3 lg:mx-1' />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
