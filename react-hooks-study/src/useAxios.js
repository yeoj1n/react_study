import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useAxios = (opts, axiosInstance = axios) => {
    const [state, setState] = useState({
        loading : true,
        error : null,
        data: null
    });
    // refetch 를 위한 trigger
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now())
    }
    //if(!opts.url) return;
    
    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading : false,
                data
            })
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            })
        })
    }, [trigger]);
    return {...state, refetch};
}

export default useAxios;