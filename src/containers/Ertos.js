import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchErtos } from '../store/erto/ertoActions'
import Erto from '../components/Erto'

function ErtosContainer ({ ertosData, fetchErtos }) {
  useEffect(() => {
    fetchErtos()
  }, [])
  return ertosData.loading ? (
    <h2>Carregant</h2>
  ) : ertosData.error ? (
    <h2>{ertosData.error}</h2>
  ) : (
    <div>
      <h1>Llista d'ERTOs per Comarca</h1>
      <div class="flex-grid">
        {ertosData.ertos.map(m => (
          <Erto 
            comarca={m.comarca}
            afectats={m.n_mero_d_afectats}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ertosData: state.ertos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchErtos: () => dispatch(fetchErtos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErtosContainer)
