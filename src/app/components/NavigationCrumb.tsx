import { Breadcrumb } from "antd";

export default function GetCrumbs({path}){
    var data = path.split(",");
    var result = [];
    for (let i = 0; i < data.length; i++) { result.push(<Breadcrumb.Item>{data[i]}</Breadcrumb.Item>); }
    
    return(
        <Breadcrumb className="m-4">
            {result}
        </Breadcrumb>
    )
}
