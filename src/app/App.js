"use client";
import { useState } from "react";
import { Sidebar } from "keep-react";
import { Button, Card, Popover } from "keep-react";
import "./styles/app.css"
import {
    Handbag, ShoppingCart, SquaresFour, ArchiveTray,
} from "phosphor-react";
import ChartMkr from "./ChartTemp"
export default function App() {
    const [chartMkrVisble, setChartMkrVisble] = useState(false);

    const handelNewChart = () => {
        setChartMkrVisble(true)
    }

    return (
        <>{!chartMkrVisble ? (
            <div className="mainApp">
            <div className="sideBar-holder">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Logo href="" img="./Logo XL Dark.png" imgAlt="Keep logo" width="200px" />
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                icon={<ShoppingCart size={24} />}
                                label="E-commerce"
                            >
                                <Sidebar.Item href="#" icon={<Handbag size={24} />}>
                                    Products
                                </Sidebar.Item>

                            </Sidebar.Collapse>

                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className="planHolder--cont">
                <Card className="p-6 max-w-xl">
                    <Card.Container className="flex items-start md:gap-5 gap-3.5">
                        <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 md:p-4 p-2.5">
                            <ArchiveTray size={28} color="#3D4A5C" />
                        </Card.Container>
                        <Card.Container className="flex flex-col gap-2">
                            <Card.Title>Hello Devyani</Card.Title>
                            <Card.Description>
                                This is your personal Diet Chart Maker
                            </Card.Description>

                        </Card.Container>
                    </Card.Container>
                </Card>
                <div className="newPlan">
                    <Card onClick={handelNewChart} className="md:p-6 p-5 max-w-[280px]">
                        <div className="addNew-holder">
                            <img src="./addIcon.png" alt="" width="100px" />

                        </div>
                        <Card.Container className="text-center">
                            <Card.Title>New Chart</Card.Title>

                        </Card.Container>
                        <Card.Container className="mt-3 flex items-center justify-center">
                            <Button type="outlinePrimary" className="!hidden md:!block">
                                Learn More
                            </Button>
                            <Button type="outlinePrimary" size="sm" className="md:hidden block">
                                Learn More
                            </Button>
                        </Card.Container>
                    </Card>
                </div>
            </div>
        </div>
        ) : (
            <ChartMkr />
          )}
        </>
        
    )
}