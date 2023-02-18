import ContentWrapper from '@/components/wrapper/ContentWrapper'
import Jobs from '@/features/job/Jobs'
import Search from '@/features/search/Search'
import React from 'react'

type Props = {}

const JobsPage = (props: Props) => {
  return (
    <ContentWrapper>
        <Search />
        <Jobs />
    </ContentWrapper>
  )
}

export default JobsPage