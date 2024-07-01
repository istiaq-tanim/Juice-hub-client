import banner from '../../../../public/fresh-juices-and-fruits-1536x1152.jpg';
import fruit from "../../../../public/fruits_img_.png";
import grape from "../../../../public/grapes.png";
import leaf from "../../../../public/leaf.png";

const About = () => {
      return (
            <div className="mt-20 lg:mb-40 max-w-[1240px] lg:w-full p-5 mx-auto lg:flex gap-20">
                  <div>
                        <p className="text-[#ABCA37] text-xl my-5 font-bold">Who we are</p>
                        <h3 className="text-4xl font-bold my-5">Take you to a better world where everyone drinks Fruit juice.</h3>
                        <p className='text-slate-600 text-justify'>Imagine a world where the refreshing taste of fruit juice unites everyone in joyous harmony. Its a place where every sip brings a burst of natural flavors, invigorating both body and spirit. </p>
                        <div className='flex gap-5 pt-5 justify-center items-center'>
                              <img src={leaf} className="w-16 h-16 bg-slate-50 rounded-xl" alt="" />
                              <div>
                                    <p className='text-xl font-bold'>
                                          Fresh from source
                                    </p>
                                    <p className='text-slate-600 text-justify'>
                                          Cultivated with care and harvested at peak ripeness, our fruits are selected to ensure exceptional freshness and quality for your enjoyment
                                    </p>
                              </div>
                        </div>
                        <div className='flex gap-5 pt-5 justify-center items-center'>
                              <img src={grape} className="w-16 h-16 bg-slate-50 rounded-xl" alt="" />
                              <div>
                                    <p className='text-xl font-bold'>

                                          100% Organic Product
                                    </p>
                                    <p className='text-slate-600 text-justify'>
                                          Enjoy our 100% organic fruits, cultivated with care to bring you the highest quality and natural goodness.
                                    </p>
                              </div>
                        </div>
                        <div className='flex gap-5 pt-5 justify-center items-center'>
                              <img src={leaf} className="w-16 h-16 bg-slate-50 rounded-xl" alt="" />
                              <div>
                                    <p className='text-xl font-bold'>
                                          100% Fresh Fruit & Vegetable
                                    </p>
                                    <p className='text-slate-600 text-justify'>
                                          Discover our selection of 100% fresh fruits and vegetables, picked at peak ripeness to bring you natural goodness and vibrant flavors.
                                    </p>
                              </div>
                        </div>
                        <div>

                        </div>
                        <div></div>
                  </div>
                  <div className='relative mt-5'>
                        <img className='rounded-lg' src={banner} alt="" />
                        <img className='w-[480px] absolute -bottom-10 lg:-right-24 hidden lg:block' src={fruit} alt="" />
                  </div>
            </div>
      );
};

export default About;