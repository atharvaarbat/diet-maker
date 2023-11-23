"use client";
import { useRef } from "react";
import { useState } from "react";
import { Label, TextInput } from "keep-react";
import { Button, Card, Popover, Textarea } from "keep-react";
import { ArrowLeft, SquaresFour, Cube } from "phosphor-react";
import "./styles/app.css";




export default function ChartMaker() {
    const [clientData, setClientData] = useState();

    const [curntStage, setCurntStage] = useState(1);
    const componentRef = useRef();




    const handelNext1 = () => {
        console.log(clientData);
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const height = document.getElementById("Height").value;
        const weight = document.getElementById("Weight").value;

        setClientData({
            name: name,
            age: age,
            height: height,
            weight: weight,
        });
        generatePdf();
        // window.print()


    };
    
    const generatePdf = () => {
        const opt = {
          margin: 1,
          filename: "myDietChart.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 5, useCORS: true, logging: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait",hotfixes: ["px_scaling"] },
        };
    
        // Use the ref to get the HTML content of the component
        const chartMakerRef = document.getElementById("page")
    
        // Check if the ref is available
        if (chartMakerRef) {
            // Introduce a delay before generating PDF
              html2pdf().from(chartMakerRef).set(opt).save();
          } else {
            console.error("Ref not available");
          }
      };

    const handelBack2 = () => {
        setCurntStage(1);
    };
    const handelNext2 = () => {
        setCurntStage(3);
    };
    

    return (
        <>
        
        <div ref={componentRef} id="page" className="NoteMakerHolder">
            <Card className="p-6 max-w-xl">
                <Card.Container className="flex items-start md:gap-5 gap-3.5">
                    <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 md:p-4 p-2.5">
                        <img src="./addIcon.png" alt="" width="35px" />
                    </Card.Container>
                    <Card.Container className="flex flex-col gap-2">
                        <Card.Title>Hello Devyani this ia a sample chart</Card.Title>
                        <Card.Description>
                            This is your personal Diet Chart Maker
                        </Card.Description>
                    </Card.Container>
                </Card.Container>
            </Card>

            <div className="global--holder">
                {curntStage == 1 ? (
                    <div className="global1">

                        <div className="basicInfo">
                            <Label value="Client Name" />
                            <br />
                            <TextInput id="name" placeholder="" color="gray" />
                            <br />
                            <Label value="Age" />
                            <br />
                            <TextInput id="age" placeholder="" color="gray" />
                            <br />

                            <div className="horizontal-alligner">
                                <div>
                                    <Label value="Height" />
                                    <TextInput id="Height" placeholder="" color="gray" />
                                </div>
                                <br />
                                <div>
                                    <Label value="Weight" />
                                    <TextInput id="Weight" placeholder="" color="gray" />
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div id="meal1" className="mealBox">
                            <h1>Meal 1</h1>

                            <br />
                            <Textarea
                                id="m1-PreMeal"
                                placeholder="Pre Meal - 1"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                            <br />

                            <br />
                            <Textarea
                                id="m1-Meal"
                                placeholder="Meal 1"
                                withBg={true}
                                color="info"
                                border={true}
                                rows={4}
                            />
                            <br />

                            <div className="horizontal-alligner">
                                <Textarea
                                    id="m1-protien"
                                    placeholder="Meal 1 - Protien"
                                    withBg={true}
                                    color="success"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m1-fats"
                                    placeholder="Meal 1 - Fats"
                                    withBg={true}
                                    color="error"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m1-carbs"
                                    placeholder="Meal 1 - Carbs"
                                    withBg={true}
                                    color="gray"
                                    border={true}
                                    rows={2}
                                />
                            </div>
                            <br />
                            <Textarea
                                id="m1-PostMeal"
                                placeholder="Post Meal - 1"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div id="meal2" className="mealBox">
                            <h1>Meal 2</h1>

                            <br />
                            <Textarea
                                id="m2-PreMeal"
                                placeholder="Pre Meal - 2"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                            <br />

                            <br />
                            <Textarea
                                id="m2-Meal"
                                placeholder="Meal 2"
                                withBg={true}
                                color="info"
                                border={true}
                                rows={4}
                            />
                            <br />

                            <div className="horizontal-alligner">
                                <Textarea
                                    id="m2-protien"
                                    placeholder="Meal 2 - Protien"
                                    withBg={true}
                                    color="success"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m2-fats"
                                    placeholder="Meal 2 - Fats"
                                    withBg={true}
                                    color="error"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m2-carbs"
                                    placeholder="Meal 2 - Carbs"
                                    withBg={true}
                                    color="gray"
                                    border={true}
                                    rows={2}
                                />
                            </div>
                            <br />
                            <Textarea
                                id="m2-PostMeal"
                                placeholder="Post Meal - 2"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div id="meal3" className="mealBox">
                            <h1>Meal 3</h1>

                            <br />
                            <Textarea
                                id="m3-PreMeal"
                                placeholder="Pre Meal - 3"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                            <br />

                            <br />
                            <Textarea
                                id="m3-Meal"
                                placeholder="Meal 3"
                                withBg={true}
                                color="info"
                                border={true}
                                rows={4}
                            />
                            <br />

                            <div className="horizontal-alligner">
                                <Textarea
                                    id="m3-protien"
                                    placeholder="Meal 3 - Protien"
                                    withBg={true}
                                    color="success"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m3-fats"
                                    placeholder="Meal 3 - Fats"
                                    withBg={true}
                                    color="error"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m3-carbs"
                                    placeholder="Meal 3 - Carbs"
                                    withBg={true}
                                    color="gray"
                                    border={true}
                                    rows={2}
                                />
                            </div>
                            <br />
                            <Textarea
                                id="m3-PostMeal"
                                placeholder="Post Meal - 3"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div id="meal4" className="mealBox">
                            <h1>Meal 4</h1>

                            <br />
                            <Textarea
                                id="m4-PreMeal"
                                placeholder="Pre Meal - 4"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                            <br />

                            <br />
                            <Textarea
                                id="m4-Meal"
                                placeholder="Meal 4"
                                withBg={true}
                                color="info"
                                border={true}
                                rows={4}
                            />
                            <br />

                            <div className="horizontal-alligner">
                                <Textarea
                                    id="m4-protien"
                                    placeholder="Meal 4 - Protien"
                                    withBg={true}
                                    color="success"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m4-fats"
                                    placeholder="Meal 4 - Fats"
                                    withBg={true}
                                    color="error"
                                    border={true}
                                    rows={2}
                                />
                                <Textarea
                                    id="m4-carbs"
                                    placeholder="Meal 4 - Carbs"
                                    withBg={true}
                                    color="gray"
                                    border={true}
                                    rows={2}
                                />
                            </div>
                            <br />
                            <Textarea
                                id="m4-PostMeal"
                                placeholder="Post Meal - 4"
                                withBg={true}
                                color="gray"
                                border={true}
                                rows={2}
                            />
                        </div>
                        <br />
                        <div className="submit-btn-holder">
                            <br />
                            <Button onClick={handelNext1} size="md" type="primary">
                                Next
                            </Button>
                            <Button id="download"  size="md" type="primary">
                                Download PDF
                            </Button>
                            <Button id="download"  size="md" type="primary">
                                Download PDF
                            </Button>

                        </div>
                    </div>
                ) : curntStage == 2 ? (
                    <div className="global2">
                        <Button onClick={handelBack2} type="primary" size="md">
                            <span className="pr-2">
                                <ArrowLeft size={24} />
                            </span>
                            Back
                        </Button>
                        <br />

                        <br />

                        <div className="submit-btn-holder">
                            <br />
                            <Button onClick={handelNext2} size="md" type="primary">
                                Next
                            </Button>
                        </div>
                    </div>
                ) : curntStage == 3 ? (
                    <h1>Level 3</h1>
                ) : (
                    <h1>Level 4</h1>
                )}
            </div>
        </div>

        </>
    );
}
