# parcial-corte2
{
  "openapi": "3.1.0",
  "info": {
    "title": "OpenAPI definition",
    "version": "v0"
  },
  "servers": [
    {
      "url": "http://localhost:8080",
      "description": "Generated server url"
    }
  ],
  "paths": {
    "/api/reserva/{id}": {
      "get": {
        "tags": [
          "reserva-rest-controller"
        ],
        "operationId": "obtenerReserva",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Reserva"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "reserva-rest-controller"
        ],
        "operationId": "actualizarReserva",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reserva"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Reserva"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "reserva-rest-controller"
        ],
        "operationId": "eliminarReserva",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          }
        }
      }
    },
    "/api/cliente/{id}": {
      "get": {
        "tags": [
          "cliente-rest-controller"
        ],
        "operationId": "obtenerCliente",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Cliente"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "cliente-rest-controller"
        ],
        "operationId": "actualizarCliente",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Cliente"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Cliente"
                }
              }
            }
          }
        }
      }
    },
    "/api/reserva": {
      "get": {
        "tags": [
          "reserva-rest-controller"
        ],
        "operationId": "listarReservas",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Reserva"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "reserva-rest-controller"
        ],
        "operationId": "registrarReserva",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reserva"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Reserva"
                }
              }
            }
          }
        }
      }
    },
    "/api/mesa": {
      "post": {
        "tags": [
          "mesa-rest-controller"
        ],
        "operationId": "agregarMesa",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Mesa"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Mesa"
                }
              }
            }
          }
        }
      }
    },
    "/api/cliente": {
      "get": {
        "tags": [
          "cliente-rest-controller"
        ],
        "operationId": "listarClientes",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Cliente"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "cliente-rest-controller"
        ],
        "operationId": "registrarUsuario",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Cliente"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Cliente"
                }
              }
            }
          }
        }
      }
    },
    "/api/disponibles": {
      "get": {
        "tags": [
          "mesa-rest-controller"
        ],
        "operationId": "listarMesasDisponibles",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Mesa"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "LocalTime": {
        "type": "object",
        "properties": {
          "hour": {
            "type": "integer",
            "format": "int32"
          },
          "minute": {
            "type": "integer",
            "format": "int32"
          },
          "second": {
            "type": "integer",
            "format": "int32"
          },
          "nano": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "Mesa": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "numero": {
            "type": "integer",
            "format": "int32"
          },
          "disponible": {
            "type": "boolean"
          }
        }
      },
      "Reserva": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "fecha": {
            "type": "string",
            "format": "date"
          },
          "hora": {
            "$ref": "#/components/schemas/LocalTime"
          },
          "descripcion": {
            "type": "string"
          },
          "mesa": {
            "$ref": "#/components/schemas/Mesa"
          }
        }
      },
      "Cliente": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "nombre": {
            "type": "string"
          },
          "correo": {
            "type": "string"
          },
          "telefono": {
            "type": "string"
          },
          "direccion": {
            "type": "string"
          }
        }
      }
    }
  }
}