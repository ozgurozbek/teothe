import GetCrumbs from "@/NavigationCrumb";
import { Card } from "antd";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
 
type Quest = {
  text: string
}
 
export const getStaticProps: GetStaticProps<{
  quest: Quest
}> = async () => {
  const res = await fetch('https://xeculus.pythonanywhere.com/generate')
  const quest = await res.json()
  return { props: { quest } }
}
 
export default function QuestDataPage({
    quest,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (<>
    <GetCrumbs
        path={"Pages,Quest Generator"}
    />
    <Card bordered={false} className='w-full'>
        {quest.text}
    </Card>
</>)
}
