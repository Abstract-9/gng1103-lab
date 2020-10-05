import React from 'react'


class Banner extends React.Component {
    render() {
        return (
            <div className={'banner'}>
                <div className={'nav'}>
                <ul>
                    <a href={'/'}><li>About us</li></a>
                    <a href={'/restaurants'}><li>Restaurant list</li></a>
                    <a href={'/propsExample'}><li>Props Example</li></a>
                </ul>
                </div>
            </div>
        )
    }
}

export default Banner;