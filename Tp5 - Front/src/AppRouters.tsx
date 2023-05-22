import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Productos } from "./components/Productos";
import InstrumentoIndividual from "./components/InstrumentoIndividual";




export class AppRouters extends Component{
    render() : ReactNode{
        return (
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>} />               
                <Route path="/detalle">
                  <Route path=":id"  element={<InstrumentoIndividual/>}/>
                </Route>             
              </Routes>
        );
      }

}