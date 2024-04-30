import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {Suspense, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

function App (): JSX.Element {
  const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

  return (
      <Suspense fallback=''>
          <div className={classNames('app', {}, [theme])}>
              <Navbar/>
              <div className={classNames('content-page')}>
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </div>
      </Suspense>
  )
}

export default App
