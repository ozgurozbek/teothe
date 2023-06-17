import { Typography, Avatar } from 'antd';

const { Title } = Typography;

function Deity(imageSrc, descriptionProps) {
  return (
    <div>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src={imageSrc}
        alt={descriptionProps.title}
      />
      <Title>{descriptionProps.title}</Title>
      <p>{descriptionProps.body}</p>
      <i>{descriptionProps.domain}</i>
    </div>
  );
}

export default function DeitiesInformation() {
  return (
    <Deity
      imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Jenelius_Londste.png'}
      descriptionProps={{
        title: 'Jenelius Londste',
        body: 'Demigoddess of devotion, usually associated with fanatic determination.',
        domain: 'Life, Tempest'
      }}
    />
  )
}