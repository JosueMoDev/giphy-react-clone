import React from 'react'

export const FlyOutMenu = () => {
  return (
    <>

<div className="bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
<div className="flex  items-center">
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-10">
              <div className="flex">
                <div className="absolute inset-x-0 top-full text-lg text-white">
                  <div className="relative p-4 bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-y-1 gap-x-20 py-8">
                        <div className="row-start-1 grid grid-cols-3 gap-y-20 gap-x-20 text-md">
                          <div>
                            <p  className="font-bold text-2xl  divide-slate-50 text-gray-50">Categories</p>
                            <div  className="border-b border-gray-50 pt-2"/>
                            <div className='row-start-1 grid grid-cols-2 gap-y-10 gap-x-20 text-md'>
                                <div>
                                    <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a href="#" className="hover:text-gray-200">Tops</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a href="#" className="hover:text-gray-200">Pants</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a href="#" className="hover:text-gray-200">Tops</a>
                                        </li>

                                        <li className="flex">
                                            <a href="#" className="hover:text-gray-200">Holiday/Gretting</a>
                                        </li>
                                    </ul>
                                </div>                          
                     
                            </div>                        
              
                          </div>

                          <div>
                            <p  className="font-bold text-2xl  divide-slate-50 text-gray-50">Stickers</p>
                            <div  className="border-b border-gray-50 pt-2"/>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Watches</a>
                              </li>

                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Wallets</a>
                              </li>

                            </ul>
                          </div>

                          <div>
                            <p  className="font-bold text-2xl  divide-slate-50 text-gray-50">Favorites</p>
                            <div  className="border-b border-gray-50 pt-2"/>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Re-Arranged</a>
                              </li>

                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Counterfeit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              
</div>
    </>
  )
}