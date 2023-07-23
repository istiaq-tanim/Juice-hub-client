import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJuice from '../../Hooks/useJuice';
import OrderCard from './OrderCard';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper';
import Cover from '../../Shared/Cover';

// Install Swiper modules
SwiperCore.use([Pagination]);

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [juice] = useJuice()
    const fruit = juice.filter(item => item.category === "Fruit")
    const berry = juice.filter(item => item.category === "Berry")
    const tropical = juice.filter(item => item.category === "Tropical")
    const citrus = juice.filter(item => item.category === "Citrus")
    const shake = juice.filter(item => item.category === "Shake")

    return (
        <div>
           <Cover title="Our Juice Hub" img="https://i.ibb.co/W2wVjmp/grapefruit-drink-with-picnic-cloth.jpg"></Cover>
            
            <div className="w-[90%] mx-auto">
                <h3 className='mt-20 text-3xl text-center'>Our Products</h3>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Citrus</Tab>
                        <Tab>Fruit</Tab>
                        <Tab>Tropical</Tab>
                        <Tab>Berry</Tab>
                        <Tab>Milk Shake</Tab>
                    </TabList>
                    <TabPanel>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {citrus.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <OrderCard item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPanel>
                    <TabPanel>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {fruit.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <OrderCard item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {tropical.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <OrderCard item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {berry.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <OrderCard item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {shake.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <OrderCard item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPanel>
                </Tabs>
            </div>

        </div >
    );
};

export default Order;