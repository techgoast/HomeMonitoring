import React, { Component } from "react";
import {Sth2, Flex} from "../template/style";
import {
    Maincontent,
    Datacontainer,
    Stselect,
    Analysis,
} from "./style";
import Chart1 from "../chart1"
import Chart2 from "../chart2";


class Main extends Component {
    state = {
        consumption: [
            {
                month: "Jan",
                water: {
                    consumed: 700,
                    cllectedFromRain: 600,
                },
                energy: {
                    regular: 100,
                    generatedSolarPower: 200,
                },
            },
            {
                month: "Feb",
                water: {
                    consumed: 650,
                    cllectedFromRain: 800,
                },
                energy: {
                    regular: 300,
                    generatedSolarPower: 400,
                },
            },
            {
                month: "Mar",
                water: {
                    consumed: 500,
                    cllectedFromRain: 600,
                },
                energy: {
                    regular: 600,
                    generatedSolarPower: 400,
                },
            },
            {
                month: "Apr",
                water: {
                    consumed: 800,
                    cllectedFromRain: 500,
                },
                energy: {
                    regular: 400,
                    generatedSolarPower: 800,
                },
            },
            {
                month: "May",
                water: {
                    consumed: 300,
                    cllectedFromRain: 200,
                },
                energy: {
                    regular: 100,
                    generatedSolarPower: 200,
                },
            },
            {
                month: "June",
                water: {
                    consumed: 900,
                    cllectedFromRain: 700,
                },
                energy: {
                    regular: 900,
                    generatedSolarPower: 700,
                },
            },
            {
                month: "July",
                water: {
                    consumed: 350,
                    cllectedFromRain: 500,
                },
                energy: {
                    regular: 450,
                    generatedSolarPower: 300,
                },
            },
            {
                month: "Aug",
                water: {
                    consumed: 600,
                    cllectedFromRain: 400,
                },
                energy: {
                    regular: 800,
                    generatedSolarPower: 600,
                },
            },
            {
                month: "Sep",
                water: {
                    consumed: 300,
                    cllectedFromRain: 200,
                },
                energy: {
                    regular: 100,
                    generatedSolarPower: 200,
                },
            },
            {
                month: "Oct",
                water: {
                    consumed: 700,
                    cllectedFromRain: 900,
                },
                energy: {
                    regular: 500,
                    generatedSolarPower: 300,
                },
            },
            {
                month: "Nov",
                water: {
                    consumed: 600,
                    cllectedFromRain: 400,
                },
                energy: {
                    regular: 700,
                    generatedSolarPower: 550,
                },
            },
            {
                month: "Dec",
                water: {
                    consumed: 1000,
                    cllectedFromRain: 200,
                },
                energy: {
                    regular: 1000,
                    generatedSolarPower: 200,
                },
            },
        ],
        count1: 6,
        count2: 6,
    }

    changeHandler1 = (e) => {
        this.setState({count1:e.target.value});
    }
    changeHandler2 = (e) => {
        this.setState({count2:e.target.value});
    }

    render () {
        return (
            <Maincontent>
                <Datacontainer>
                    <Flex>
                        <Sth2>WATER CONSUMPTION </Sth2>
                        <Stselect defaultValue="6" onChange={this.changeHandler1}>
                            <option value="1">Last month</option>
                            <option value="3">Last 3 months</option>
                            <option value="6">Last 6 months</option>
                            <option value="12">Last year</option>
                        </Stselect>
                    </Flex>
                    <Analysis>
                        <Chart1 consumption={this.state.consumption} count={this.state.count1}/>
                    </Analysis>
                </Datacontainer>
                <Datacontainer>
                    <Flex>
                        <Sth2>Energy CONSUMPTION </Sth2>
                        <Stselect defaultValue="6" onChange={this.changeHandler2}>
                            <option value="1">Last month</option>
                            <option value="3">Last 3 months</option>
                            <option value="6">Last 6 months</option>
                            <option value="12">Last year</option>
                        </Stselect>
                    </Flex>
                    <Analysis>
                        <Chart2 consumption={this.state.consumption}  count={this.state.count2}/>
                    </Analysis>
                </Datacontainer>
            </Maincontent>
        )
    }
}

export default Main;