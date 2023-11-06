import { Tabs, TabsHeader, Tab } from '@material-tailwind/react'
import { PageContent } from './page-content'
import { Provider } from 'react-redux'
import store from '../store/index'
export function TabsDefault() {
    const data = [
        {
            label: 'Home',
            value: 'home',
        },
    ]

    return (
        <Tabs value="home">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <Provider store={store}>
                <PageContent></PageContent>
            </Provider>
        </Tabs>
    )
}
