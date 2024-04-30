import styles from "./Stats.module.scss";
import useScore from "@/hooks/useScore";

export function Stats() {

  const {scoreData} = useScore()

  const stats: {
    label: string
    units: string
    value: number
    description: string
  }[] = []

  const statsDescriptions = scoreData?.stats.statsDescriptions

  if (!statsDescriptions) return <></>

  for (const key in scoreData?.stats) {
    const stat = {
      title: key,
      value: scoreData.stats[key as keyof typeof scoreData.stats] as number,
      label: '',
      description: '',
      units: '',
    }

    for (const key2 in statsDescriptions) {
      if (key.toLowerCase() === key2.toLowerCase()) {
        stat.label = statsDescriptions[key2].label
        stat.description = statsDescriptions[key2].description
        stat.units = statsDescriptions[key2].units
        stats.push(stat)
      }
    }
  }

  const formatNumber = (value: number, units: string) => {
    if (
      units === 'USD' ||
      units === 'number' ||
      units === 'months' ||
      units === 'hours'
    ) {
      return value.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
    }

    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    })
  }

  return <>
    <div className={styles.table}>

      {stats.map(stat => (
        <div
          className={styles.row}
          key={stat.label}>

          <div className={styles.label}>
            {stat.label}
          </div>
          <div className={styles.value}>
            {formatNumber(stat.value, stat.units)} {stat.units != 'number' ? stat.units : ''}
          </div>
        </div>
      ))}
    </div>
  </>
}
