import React, { Component, useState } from 'react';
import NonSSRWrapper from "../components/NoSSR";
import metadata from '../site-data';

class All extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: {}
        }
        this.getTasks = this.getTasks.bind(this);
    }

    async getTasks() {
        const requestOptions = {
            method: 'GET'
        }
        const res = await fetch(metadata['site-url']+'/api/server', requestOptions);
        try {
            const data = await res.json();
            return data;
        } catch {
            return JSON.stringify({});
        }
    }

    async componentDidMount() {
        let tasks = await this.getTasks();
        tasks = JSON.parse(tasks);
        this.setState({tasks});
    }

    render() {
        let thistasks;
        try {
            thistasks = this.state.tasks;
        } catch {
            thistasks = {}
        }
        return (
            <NonSSRWrapper>
                <div className="flex mt-24">
                    <div className="m-auto text-center flex flex-wrap items-center justify-center">
                        { (Object.keys(thistasks).length > 0) ? (<div>
                            {Object.keys(thistasks).map(function(data, index) {
                                // alert(this)
                                let bod = thistasks[data];
                                return (
                                    <div className='bg-clip-text text-transparent font-bold bg-gradient-to-r to-accent-800 from-secondary-700 hover:text-secondary-700 duration-200 p-1 m-2' key={index}>
                                        <a href={`/edit/${data}`} className='w-0'><p key = { index }>{ bod['date'] }</p></a>
                                    </div>
                                )
                            })} </div>) : (<div>{`No tasks created yet... don't forget to save`}</div>)
                        }
                    </div>
                </div>
            </NonSSRWrapper>
        )
    }
}

export default All;