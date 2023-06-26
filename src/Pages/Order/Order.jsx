import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJuice from '../../Hooks/useJuice';
import OrderCard from './OrderCard';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [juice] = useJuice()
    console.log(juice)
    const fruit = juice.filter(item => item.category === "Fruit")
    const berry = juice.filter(item => item.category === "Berry")
    const tropical = juice.filter(item => item.category === "Tropical")
    const citrus = juice.filter(item => item.category === "Citrus")

    console.log(fruit)
    return (
        <div>
            <img className="h-[600px] bg-cover w-full backdrop-blur-md" src="https://i.ibb.co/LtYqxkv/jugoslocos-GHsf8ny3-LF0-unsplash-1.jpg" />
            <div className=" w-[90%] mx-auto">
                <h3 className='mt-20 text-3xl text-center'>Our Products</h3>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Citrus</Tab>
                        <Tab>Fruit</Tab>
                        <Tab>Tropical</Tab>
                        <Tab>Berry</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5 '>
                            {
                                citrus.map(item => <OrderCard key={item.id} item={item}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5 '>
                            {
                                fruit.map(item => <OrderCard key={item.id} item={item}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5 '>
                            {
                                tropical.map(item => <OrderCard key={item.id} item={item}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5 '>
                            {
                                berry.map(item => <OrderCard key={item.id} item={item}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;