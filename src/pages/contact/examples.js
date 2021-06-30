import React from 'react'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Say Hi</h1>
              <p>
               You can email us at studio4.9cooperative@gmail.com
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
