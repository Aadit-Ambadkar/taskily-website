import React, { useState, useEffect } from 'react';

import { kaReducer, Table } from 'ka-table';
import { insertRow } from 'ka-table/actionCreators';
import { deleteRow } from 'ka-table/actionCreators';
import { DataType, EditingMode, InsertRowPosition } from 'ka-table/enums';
import NonSSRWrapper from "../../components/NoSSR";
import { useRouter } from 'next/router'
import metadata from '../../site-data';

const dataArray = [{
    taskName: `Start Planning!`,
    startTime: `7:00`,
    endTime: `7:05`,
    id: 0,
  }];

let maxValue = Math.max(...dataArray.map((i) => i.id));
const generateNewId = () => {
  maxValue++;
  return maxValue;
};

const tablePropsInit = {
  columns: [
    { key: 'taskName', title: 'Date', dataType: DataType.String },
    { key: 'startTime', title: 'Start Time', dataType: DataType.String },
    { key: 'endTime', title: 'End Time', dataType: DataType.String },
    {
      key: 'insertRowBeforeColumn', title: 'Insert Time Before'
    },
    {
      key: 'insertRowAfterColumn', title: 'Insert Time Before'
    },
    { key: ':delete', width: 45 },
    {
      key: 'addColumn',
      width: 45
    },
  ],
  editingMode: EditingMode.Cell,
  data: dataArray,
  rowKeyField: 'id',
};


const AddButton = ({
  dispatch,
}) => {
 return (
  <div className='plus-cell-button'>
    <img
      src='https://komarovalexander.github.io/ka-table/static/icons/plus.svg'
      alt='Add New Row'
      title='Add New Row'
      onClick={() => {
        {
          const id = generateNewId();
          const newRow = {
            id,
            taskName: `Task`,
            startTime: `Time`,
            endTime: `Time`
          };
          dispatch(
            insertRow(newRow, {
              rowKeyValue: 0,
              insertRowPosition: InsertRowPosition.after,
            })
          );
        }
      }}
    />
  </div>
 );
};

const DeleteRow = ({ dispatch, rowKeyValue }) => {
  return (
    <img
      src="https://komarovalexander.github.io/ka-table/static/icons/delete.svg"
      className="delete-row-column-button"
      onClick={() => dispatch(deleteRow(rowKeyValue))}
      alt=""
    />
  );
};

const Edit = () => {
  const router = useRouter();
  const { thash } = router.query
  const [tableProps, setTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    setTableProps((prevState) => kaReducer(prevState, action));
  };

  const [isLoading, setLoading] = useState(true);


  

  useEffect(() => {
    if (isLoading)
        getTask();
  });
  async function getTask () {
    if (router.isReady) { 
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify({'timeHash': thash})
        }
        try {
            let res = await fetch(metadata['site-url']+'/api/server', requestOptions);
            let data = await res.json()
            const task = JSON.parse(data);
            let tp2 = JSON.parse(JSON.stringify(tableProps))
            tp2.data = task['body'];

            // for (let i = 0; i < tp2.data; i++) {
            //     tp2.data[i].id = i;
            // }
            setTableProps(tp2)
            maxValue = Math.max(...tp2.data.map((i) => i.id));
            setLoading(false)
            // setLoading(false);
        } catch {
            router.push(`/new`)
            // setLoading(false)
        }
    }
  }
  
  return (
    <NonSSRWrapper>
      <div className="add-row-demo flex mt-24">
        <div className="m-auto flex flex-row items-center justify-center">
          <Table
            {...tableProps}
            childComponents={{
              cell: {
                content: (props) => {
                  if (props.column.key === 'insertRowBeforeColumn') {
                    return (
                      <button
                        onClick={() => {
                          const id = generateNewId();
                          const newRow = {
                            id,
                            taskName: `Task`,
                            startTime: `Time`,
                            endTime: `Time`
                          };
                          dispatch(
                            insertRow(newRow, { rowKeyValue: props.rowKeyValue })
                          );
                        }}
                        className='bg-transparent hover:bg-secondary-500 text-secondary-700 font-semibold hover:text-white py-2 px-4 border border-secondary-500 hover:border-transparent rounded duration-200'
                      >
                        Insert Time Before
                      </button>
                    );
                  }
                  if (props.column.key === 'insertRowAfterColumn') {
                    return (
                      <button
                        onClick={() => {
                          const id = generateNewId();
                          const newRow = {
                            id,
                            taskName: `Task`,
                            startTime: `Time`,
                            endTime: `Time`
                          };
                          dispatch(
                            insertRow(newRow, {
                              rowKeyValue: props.rowKeyValue,
                              insertRowPosition: InsertRowPosition.after,
                            })
                          );
                        }}
                        className='bg-transparent hover:bg-secondary-500 text-secondary-700 font-semibold hover:text-white py-2 px-4 border border-secondary-500 hover:border-transparent rounded duration-200'
                      >
                        Insert Time After
                      </button>
                    );
                  }
                  if (props.column.key === ':delete') {
                    return <DeleteRow {...props}/>;
                  }
                },
              },
              headCell: {
                content: (props) => {
                  if (props.column.key === 'addColumn'){
                    return <AddButton {...props}/>;
                  }
                }
              }
            }}
            dispatch={dispatch}
          />
          
        </div>
      </div>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <button onClick={async () => {
            // alert(JSON.stringify(tableProps.data))
            // alert(thash)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({'timeHash': thash, 'body': tableProps.data})
            }
            await fetch('/api/save', requestOptions)
          }}>
            <div className="className='bg-transparent hover:bg-accent-700 text-accent-800 font-semibold hover:text-white py-2 px-4 border border-accent-700 hover:border-transparent rounded duration-200'">
              SAVE
            </div>
          </button>
        </div>
      </footer>
    </NonSSRWrapper>
  );
};

export default Edit;
