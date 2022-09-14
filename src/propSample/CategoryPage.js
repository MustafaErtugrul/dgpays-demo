import React from 'react'
import CategoryChild from './CategoryChild'
import CategoryFirstChild from './CategoryFirstChild';

function CategoryPage() {

    const hello = (data) => {

        alert('Hello ' + data);

    }

  return (
    <CategoryFirstChild hello={hello} />
  )

}

export default CategoryPage