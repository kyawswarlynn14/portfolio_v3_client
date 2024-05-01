import React from 'react'
import ItemLayout from './layouts/ItemLayout'
import { useTheme } from 'next-themes'

const GithubInfo = () => {
    const { theme } = useTheme();
    console.log("theme", theme)

  return (
    <div className='w-full mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-12'>
        <ItemLayout
          className={"w-full sm:w-[50%] p-2 rounded-lg shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700"}
        >
            {theme === 'dark' ? (
                <img
                className="w-full h-[400px] "
                src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=kyawswarlynn14&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=true`}
                alt="ksl"
                loading="lazy"
                />
            ) : (
                <img
                  className="w-full h-[400px] "
                  src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=kyawswarlynn14&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=FEFE5B&text_bold=true`}
                  alt="ksl"
                  loading="lazy"
                />
            )}
        </ItemLayout>

        <ItemLayout className={"w-full sm:w-[50%] p-2 rounded-lg shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700"}>
            {theme === 'dark' ? (
                <img
                className="w-full h-[400px] "
                src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=kyawswarlynn14&theme=transparent&hide_border=true&title_color=FFF&text_color=FFF&icon_color=FEFE5B&text_bold=false`}
                alt="ksl"
                loading="lazy"
                />
            ) : (
                <img
                  className="w-full h-[400px] "
                  src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=kyawswarlynn14&theme=transparent&hide_border=true&title_color=000&text_color=000&icon_color=FEFE5B&text_bold=false`}
                  alt="ksl"
                  loading="lazy"
                />
            )}
        </ItemLayout>
    </div>
  )
}

export default GithubInfo