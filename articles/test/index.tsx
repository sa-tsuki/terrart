import React, { memo } from 'react'

//
// オブジェクトの型指定
//
type ObjectType = {
  id: number
  name: string
  title: string
  category?: {
    id: number
    name: string
  }
  published: boolean
}

const object: ObjectType[] = [
  {
    id: 1352726,
    name: 'isobe',
    title: 'title',
    category: {
      id: 1234,
      name: 'cate',
    },
    published: false,
  },
]

//
// 関数の型指定
//
type Event = (input: string) => void

const input = 'string' as string

const event: Event = (input) => {
  console.log(input)
}

event(input)

const index: React.VFC = () => {
  return <div>React</div>
}

export default memo(index)
