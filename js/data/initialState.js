const GlobalContext = React.createContext();

const { useState, useEffect, useContext } = React;

const e = React.createElement;
const c = useContext;
const f = useEffect;
const s = () => c(GlobalContext);