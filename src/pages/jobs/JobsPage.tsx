import ContentWrapper from '@/components/wrapper/ContentWrapper'
import Jobs from '@/features/job/Jobs'
import React from 'react'

type Props = {}

const JobsPage = (props: Props) => {
  return (
    <ContentWrapper>
        <Jobs />
    </ContentWrapper>
  )
}

export default JobsPage