import { Typography } from 'antd';

const { Title } = Typography;

export default function SimpleContent({ contentProps }) {
    let imgData;
    if (contentProps.image) {
        imgData = <img className='w-[90%] my-4 rounded-lg' src={contentProps.image.src} alt={contentProps.image.alt} />
    }

    let textData = [];
    for (let i = 0; i < contentProps.text.length; i++) {
        textData.push(<p>{contentProps.text[i]}</p>)
    }

    return (
        <section>
            <Title>{contentProps.title}</Title>
            {imgData}
            {textData}
        </section>
    )
}