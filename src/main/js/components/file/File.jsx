import React, {useState} from 'react'
import style from './file.module.scss'
import {
  useParams,
useLocation
} from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export function Filee(props)  {


let query = useQuery();
    let { id } = useParams();
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);

    const isFilePresent = (files) => {return files && files.length >0 ;}

    const onChange= (event) =>{
        if(isFilePresent(event.target.files)){
            const size = event.target.files[0].size
            if(props.limit){
                if(size > parseInt(props.limit)){
                    setError('Size limit exceeded');
                    return ;
                }
            }
            setFile(event.target.files[0])
        }
    }

    const upload = () => {
    const data = new FormData()
    data.append('file', file)
    const requestOptions = {
            method: 'POST',
            body : data
        };
        fetch('api/file',requestOptions)
        .then(res => res.json())
        .then((res) => {
            console.log(res)
        })
    }

    console.log(query.get('code'));
    console.log(query.get('state'));
    return <div className={style.fileContainer}>
                    {error && <p data-testid="error"> {error} </p>}
                   <p> Url param: {id}
                    Url param: {query}</p>
                   <p>File</p>
                                      <input type="file"  data-testid="file" onChange={onChange}/>
                   <input type="button" value="submit" onClick={upload}/>
               </div>;;
}
