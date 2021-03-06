import React, { Component } from 'react';
import uuid from 'uuid'

class NuevaCita extends Component {
    state = { 
        cita : {
            mascota : "",
            propietario : "",
            fecha : "",
            hora : "",
            sintomas : ""
        },
        error : false
    }
    
    handleChange = (e) => {
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error : true
            })
            return;
        }

        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        this.props.crearNuevaCita(this.state.cita)
    }

    render() { 
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form
                        onSubmit={this.handleSubmit}
                    >

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>{/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre dueño mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>{/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha cita
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>

                        </div>{/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describa los sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                />
                            </div>
                        </div>{/*form-group*/}

                        <input 
                            type="submit" 
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                            />
                    </form>
                </div>
            </div>
        );
    }
}
 
export default NuevaCita;