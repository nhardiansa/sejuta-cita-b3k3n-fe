import React from 'react'

interface BookItemListProps {
  customClass?: string,
}

export const BookItemList = ({ customClass }: BookItemListProps) => {
  return (
    <div className={`book-item min-w-[10rem] md:min-w-[13rem] ${customClass}`}>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg min-h-[13rem] object-cover" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
          </a>
          <div className="p-4">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
