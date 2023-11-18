'use client'
import Image from 'next/image'
import base64url from 'base64url'
import { qACard } from './card.css'
import { AnswerState } from '@/types'
import { exchangeStateToUrl } from '@/lib'
import { useState } from 'react'
export const Card = ({
  text,
  contentId,
  mode = 'answered',
}: {
  text: string
  contentId?: string
  mode?: AnswerState
}) => {
  const imgSrc = `${process.env.NEXT_PUBLIC_CLOUDFRONT_BASE_URL}/${contentId}`
  return <Image className={qACard} src={imgSrc} width={1200} height={630} alt={text} />
}
