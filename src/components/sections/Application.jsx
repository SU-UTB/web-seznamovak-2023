import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2023, 6, 14, 15, 0, 0)
  const shouldStartRegistration = Date.now() >= startDate

  const { data, isLoading, error } = useFetchReservations()

  return (
    <section id="prihlaska">
      <div className="flex flex-wrap justify-around w-full pt-32 mx-auto lg:w-4/5 lg:pb-16">
        {!shouldStartRegistration && (
          <div className="w-full notify-headline">
            <Notification />
            <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5">
              <TurnusHeadline
                title="1. Turnus"
                date="21. 8. - 24. 8. 2023"
                color="#E25525"
              />
              <TurnusHeadline
                title="2. Turnus"
                date="28. 8. - 31. 8. 2023"
                color="#F3A548"
              />
            </div>
          </div>
        )}
        {shouldStartRegistration && (
          <>
            <TurnusItem
              title="1. Turnus"
              date="21. 8. - 24. 8. 2023"
              currentPlaces={data?.firstBatchCapacity}
              totalPlaces={96}
              color="#E25525"
              isLoading={isLoading}
              error={error}
              regLink="/turnus1"
            />
            <TurnusItem
              title="2. Turnus"
              date="28. 8. - 31. 8. 2023"
              currentPlaces={data?.secondBatchCapacity}
              totalPlaces={96}
              color="#F3A548"
              isLoading={isLoading}
              error={error}
              regLink="/turnus2"
            />
          </>
        )}
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application
