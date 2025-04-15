import { gql } from '@apollo/client/core';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Calificacion = {
  __typename?: 'Calificacion';
  _id: Scalars['ID']['output'];
  comentario?: Maybe<Scalars['String']['output']>;
  cursoId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  fecha: Scalars['DateTime']['output'];
  usuarioId: Scalars['ID']['output'];
  valor: Scalars['Int']['output'];
};

export type Categoria = {
  __typename?: 'Categoria';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  descripcion?: Maybe<Scalars['String']['output']>;
  nombreCategoria: Scalars['String']['output'];
};

export type Comentario = {
  __typename?: 'Comentario';
  _id: Scalars['ID']['output'];
  comentario: Scalars['String']['output'];
  cursoId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  fecha: Scalars['DateTime']['output'];
  usuarioId: Scalars['ID']['output'];
};

export type CreateCalificacion_UserInput = {
  comentario?: InputMaybe<Scalars['String']['input']>;
  cursoId: Scalars['ID']['input'];
  valor: Scalars['Int']['input'];
};

export type CreateCategoriaInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  nombreCategoria: Scalars['String']['input'];
};

export type CreateComentario_UserInput = {
  comentario: Scalars['String']['input'];
  cursoId: Scalars['ID']['input'];
};

export type CreateCuestionarioInput = {
  cuestionarioTitle?: InputMaybe<Scalars['String']['input']>;
  cursoId: Scalars['ID']['input'];
  descripcion?: InputMaybe<Scalars['String']['input']>;
  numeroPreguntasPresentar?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateCursoComprado_UserInput = {
  cursoId: Scalars['ID']['input'];
};

export type CreateCursoInput = {
  aprenderas?: InputMaybe<Array<Scalars['String']['input']>>;
  categorias?: InputMaybe<Array<Scalars['ID']['input']>>;
  courseTitle: Scalars['String']['input'];
  cuestionarioId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  descripcionCorta: Scalars['String']['input'];
  descripcionLarga?: InputMaybe<Scalars['String']['input']>;
  descuento?: InputMaybe<Scalars['Float']['input']>;
  dirigidoA?: InputMaybe<Array<Scalars['String']['input']>>;
  duracionHoras?: InputMaybe<Scalars['Float']['input']>;
  fechaLanzamiento?: InputMaybe<Scalars['DateTime']['input']>;
  imagenURL?: InputMaybe<ImageInput>;
  instructor?: InputMaybe<Scalars['ID']['input']>;
  nivel?: InputMaybe<Nivel>;
  objetivos?: InputMaybe<Array<Scalars['String']['input']>>;
  precio?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInstructorInput = {
  especializacion?: InputMaybe<Array<Scalars['String']['input']>>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  pais?: InputMaybe<Scalars['String']['input']>;
  profesion?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMaterialInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  materialTitle: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateModuloInput = {
  cursoIdString: Scalars['String']['input'];
  descripcion?: InputMaybe<Scalars['String']['input']>;
  moduloTitle: Scalars['String']['input'];
  numeroModulo: Scalars['Int']['input'];
};

export type CreateOpcionInput = {
  esCorrecta: Scalars['Boolean']['input'];
  orden?: InputMaybe<Scalars['Int']['input']>;
  textOpcion: Scalars['String']['input'];
};

export type CreatePerfilInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  celular?: InputMaybe<Scalars['String']['input']>;
  contacto?: InputMaybe<Scalars['String']['input']>;
  fechaNacimiento?: InputMaybe<Scalars['DateTime']['input']>;
  intereses?: InputMaybe<Array<Scalars['String']['input']>>;
  ubicacion?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePreguntaInput = {
  enunciado: Scalars['String']['input'];
  moduloId?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  puntos?: InputMaybe<Scalars['Float']['input']>;
  respuestaOrdenamiento?: InputMaybe<Scalars['String']['input']>;
  tipoPregunta: TipoPregunta;
  unidadId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateRespuestaCuestionarioInput = {
  cuestionarioId?: InputMaybe<Scalars['ID']['input']>;
  cursoId: Scalars['ID']['input'];
  estado?: InputMaybe<EstadoCuestionario>;
  nota?: InputMaybe<Scalars['Float']['input']>;
  respuestas?: InputMaybe<Array<CreateRespuestaPreguntaInput>>;
  usuarioId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateRespuestaPreguntaInput = {
  esCorrecto: Scalars['Boolean']['input'];
  preguntaId: Scalars['ID']['input'];
  respuestaAbierta?: InputMaybe<Scalars['String']['input']>;
  /** Respuestas seleccionadas a partir de las opciones de las preguntas */
  respuestaId?: InputMaybe<Array<RespuestaDataInput>>;
  tipoPregunta?: InputMaybe<TipoPregunta>;
};

export type CreateRespuestaPregunta_ResolverInput = {
  preguntaId: Scalars['ID']['input'];
  respuestaAbierta?: InputMaybe<Scalars['String']['input']>;
  /** Respuestas seleccionadas a partir de las opciones de las preguntas */
  respuestaId?: InputMaybe<Array<RespuestaDataInput>>;
};

export type CreateUnidadInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  materiales?: InputMaybe<Array<CreateMaterialInput>>;
  numeroUnidad: Scalars['Int']['input'];
  unidadTitle: Scalars['String']['input'];
  urlVideo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUsuarioInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notificaciones?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  perfil?: InputMaybe<CreatePerfilInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type Cuestionario = {
  __typename?: 'Cuestionario';
  _id: Scalars['ID']['output'];
  cuestionarioTitle?: Maybe<Scalars['String']['output']>;
  cursoId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  descripcion?: Maybe<Scalars['String']['output']>;
  fechaCreacion: Scalars['DateTime']['output'];
  notaMaxima?: Maybe<Scalars['Int']['output']>;
  notaMinimaAprobar?: Maybe<Scalars['Int']['output']>;
  preguntas: Array<Pregunta>;
  published?: Maybe<Scalars['Boolean']['output']>;
};

export type Curso = {
  __typename?: 'Curso';
  _id: Scalars['ID']['output'];
  aprenderas: Array<Scalars['String']['output']>;
  calificacionPromedio?: Maybe<Scalars['Float']['output']>;
  categorias: Array<Categoria>;
  courseTitle: Scalars['String']['output'];
  cuestionarioId?: Maybe<Cuestionario>;
  currency?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  descripcionCorta: Scalars['String']['output'];
  descripcionLarga?: Maybe<Scalars['String']['output']>;
  descuento?: Maybe<Scalars['Float']['output']>;
  dirigidoA: Array<Scalars['String']['output']>;
  duracionHoras?: Maybe<Scalars['Float']['output']>;
  fechaLanzamiento?: Maybe<Scalars['DateTime']['output']>;
  imagenURL?: Maybe<ImageObjectType>;
  instructor?: Maybe<Instructor>;
  modulosIds?: Maybe<Array<Modulo>>;
  nivel?: Maybe<Nivel>;
  numeroCalificaciones: Scalars['Int']['output'];
  objetivos: Array<Scalars['String']['output']>;
  precio?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CursoComprado = {
  __typename?: 'CursoComprado';
  _id: Scalars['ID']['output'];
  courseTitle: Scalars['String']['output'];
  cursoCompletado: Scalars['Boolean']['output'];
  cursoId: Curso;
  deleted: Scalars['Boolean']['output'];
  estadoAcceso: EstadoAccesoCurso;
  fechaCompra: Scalars['DateTime']['output'];
  fechaExpiracion?: Maybe<Scalars['DateTime']['output']>;
  progreso: Scalars['Float']['output'];
  ultimaNota?: Maybe<Scalars['Float']['output']>;
  usuarioId: Usuario;
};

export type CursoOutput = {
  __typename?: 'CursoOutput';
  _id: Scalars['ID']['output'];
  aprenderas: Array<Scalars['String']['output']>;
  calificacionPromedio?: Maybe<Scalars['Float']['output']>;
  categorias: Array<Categoria>;
  courseTitle: Scalars['String']['output'];
  cuestionarioId?: Maybe<Cuestionario>;
  currency?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  descripcionCorta: Scalars['String']['output'];
  descripcionLarga?: Maybe<Scalars['String']['output']>;
  descuento?: Maybe<Scalars['Float']['output']>;
  dirigidoA: Array<Scalars['String']['output']>;
  duracionHoras?: Maybe<Scalars['Float']['output']>;
  fechaLanzamiento?: Maybe<Scalars['DateTime']['output']>;
  imagenURL?: Maybe<ImageObjectType>;
  instructor?: Maybe<Instructor>;
  modulosIds?: Maybe<Array<Scalars['ID']['output']>>;
  nivel?: Maybe<Nivel>;
  numeroCalificaciones: Scalars['Int']['output'];
  objetivos: Array<Scalars['String']['output']>;
  precio?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type DeletedCountOutput = {
  __typename?: 'DeletedCountOutput';
  deletedCount: Scalars['Float']['output'];
};

/** Estados de acceso a un curso */
export enum EstadoAccesoCurso {
  Activo = 'Activo',
  Inactivo = 'Inactivo'
}

/** Estados de un cuestionario */
export enum EstadoCuestionario {
  Aprobado = 'Aprobado',
  Desaprobado = 'Desaprobado',
  EnProgreso = 'En_progreso',
  SinEmpezar = 'Sin_empezar'
}

/** Estados de una orden */
export enum EstadoOrden {
  Cancelada = 'Cancelada',
  Completada = 'Completada',
  Pendiente = 'Pendiente',
  Procesando = 'Procesando',
  Reembolsada = 'Reembolsada'
}

export type ImageInput = {
  alt: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ImageObjectType = {
  __typename?: 'ImageObjectType';
  alt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Instructor = {
  __typename?: 'Instructor';
  _id: Scalars['ID']['output'];
  calificacionPromedio: Scalars['Float']['output'];
  deleted: Scalars['Boolean']['output'];
  especializacion: Array<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  pais?: Maybe<Scalars['String']['output']>;
  profesion?: Maybe<Scalars['String']['output']>;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Material = {
  __typename?: 'Material';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  descripcion?: Maybe<Scalars['String']['output']>;
  materialTitle: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Modulo = {
  __typename?: 'Modulo';
  _id: Scalars['ID']['output'];
  cursoId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  descripcion?: Maybe<Scalars['String']['output']>;
  moduloTitle: Scalars['String']['output'];
  numeroModulo: Scalars['Int']['output'];
  unidades?: Maybe<Array<Unidad>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Calificacion_create: Calificacion;
  Calificacion_hardDelete: Calificacion;
  Calificacion_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Calificacion_restore: Calificacion;
  Calificacion_softDelete: Calificacion;
  Calificacion_update: Calificacion;
  Categorias_create: Categoria;
  Categorias_hardDelete: Categoria;
  Categorias_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Categorias_restore: Categoria;
  Categorias_softDelete: Categoria;
  Categorias_update: Categoria;
  Comentario_create: Comentario;
  Comentario_hardDelete: Comentario;
  Comentario_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Comentario_restore: Comentario;
  Comentario_softDelete: Comentario;
  Comentario_update: Comentario;
  Cuestionario_create: Cuestionario;
  Cuestionario_hardDelete: Cuestionario;
  Cuestionario_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Cuestionario_publish: Cuestionario;
  Cuestionario_restore: Cuestionario;
  Cuestionario_softDelete: Cuestionario;
  Cuestionario_update: Cuestionario;
  CursoComprado_create: CursoComprado;
  CursoComprado_hardDelete: CursoComprado;
  CursoComprado_hardDeleteAllSoftDeleted: DeletedCountOutput;
  CursoComprado_restore: CursoComprado;
  CursoComprado_softDelete: CursoComprado;
  Curso_create: CursoOutput;
  Curso_hardDelete: CursoOutput;
  Curso_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Curso_restore: CursoOutput;
  Curso_softDelete: CursoOutput;
  Curso_update: CursoOutput;
  Instructor_create: Instructor;
  Instructor_hardDelete: Instructor;
  Instructor_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Instructor_restore: Instructor;
  Instructor_softDelete: Instructor;
  Instructor_update: Instructor;
  Material_create: Material;
  Material_hardDelete: Material;
  Material_hardDeleteAllSoftDeleted: Array<Material>;
  Material_restore: Material;
  Material_softDelete: Material;
  Material_update: Material;
  Modulo_create: Modulo;
  Modulo_hardDelete: Modulo;
  Modulo_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Modulo_restore: Modulo;
  Modulo_softDelete: Modulo;
  Modulo_update: Modulo;
  Opcion_create: Opcion;
  Opcion_hardDelete: Opcion;
  Opcion_hardDeleteAllSoftDeleted: Array<Opcion>;
  Opcion_restore: Opcion;
  Opcion_softDelete: Opcion;
  Opcion_update: Opcion;
  Ordenes_create: Orden;
  Ordenes_hardDelete: Orden;
  Ordenes_hardDeleteAllSoftDeleted: DeletedCountOutput;
  Ordenes_pullCurso: Orden;
  Ordenes_pushCurso: Orden;
  Ordenes_restore: Orden;
  Ordenes_softDelete: Orden;
  Ordenes_update: Orden;
  Pregunta_create: Pregunta;
  Pregunta_hardDelete: Pregunta;
  Pregunta_hardDeleteAllSoftDeleted: Array<Pregunta>;
  Pregunta_restore: Pregunta;
  Pregunta_softDelete: Pregunta;
  Pregunta_update: Pregunta;
  RespuestaCuestionario_calcularNota: Scalars['Float']['output'];
  RespuestaCuestionario_create: RespuestaCuestionario;
  RespuestaCuestionario_hardDelete: RespuestaCuestionario;
  RespuestaCuestionario_hardDeleteAllSoftDeleted: DeletedCountOutput;
  RespuestaCuestionario_restore: RespuestaCuestionario;
  RespuestaCuestionario_softDelete: RespuestaCuestionario;
  RespuestaCuestionario_update: RespuestaCuestionario;
  RespuestaPregunta_create: RespuestaPregunta;
  Unidad_create: Unidad;
  Unidad_hardDelete: Unidad;
  Unidad_hardDeleteAllSoftDeleted: Array<Unidad>;
  Unidad_restore: Unidad;
  Unidad_softDelete: Unidad;
  Unidad_update: Unidad;
  jwt_requestPasswordReset: Scalars['String']['output'];
  jwt_resetPassword: Scalars['String']['output'];
  jwt_sendVerificationEmail: UserJwtOutput;
  jwt_updatePassword: UsuarioOutput;
  login: UserRequest;
  signup: UsuarioOutput;
  usuario_create: UsuarioOutput;
  usuario_hardDelete: UsuarioOutput;
  usuario_restore: UsuarioOutput;
  usuario_softDelete: UsuarioOutput;
  usuario_update_onlyAdmin: UsuarioOutput;
  usuario_update_onlyUser: UsuarioOutput;
  usuarios_hardDeleteAllSoftDeleted: DeletedCountOutput;
};


export type MutationCalificacion_CreateArgs = {
  createCalificacionInput: CreateCalificacion_UserInput;
};


export type MutationCalificacion_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCalificacion_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationCalificacion_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationCalificacion_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateCalificacionInput: UpdateCalificacionInput;
};


export type MutationCategorias_CreateArgs = {
  createCategoriaInput: CreateCategoriaInput;
};


export type MutationCategorias_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategorias_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationCategorias_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationCategorias_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateCategoriaInput: UpdateCategoriaInput;
};


export type MutationComentario_CreateArgs = {
  createComentarioInput: CreateComentario_UserInput;
};


export type MutationComentario_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationComentario_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationComentario_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationComentario_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateComentarioInput: UpdateComentarioInput;
};


export type MutationCuestionario_CreateArgs = {
  createCuestionarioInput: CreateCuestionarioInput;
};


export type MutationCuestionario_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCuestionario_PublishArgs = {
  idCuestionario: Scalars['ID']['input'];
};


export type MutationCuestionario_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationCuestionario_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationCuestionario_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateCuestionarioInput: UpdateCuestionarioInput;
};


export type MutationCursoComprado_CreateArgs = {
  createCursoCompradoInput: CreateCursoComprado_UserInput;
};


export type MutationCursoComprado_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCursoComprado_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationCursoComprado_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationCurso_CreateArgs = {
  createCursoInput: CreateCursoInput;
};


export type MutationCurso_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCurso_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationCurso_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationCurso_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateCursoInput: UpdateCursoInput;
};


export type MutationInstructor_CreateArgs = {
  createInstructorInput: CreateInstructorInput;
};


export type MutationInstructor_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInstructor_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationInstructor_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationInstructor_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateInstructorInput: UpdateInstructorInput;
};


export type MutationMaterial_CreateArgs = {
  createOpcionInput: CreateMaterialInput;
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationMaterial_HardDeleteArgs = {
  idMaterial: Scalars['ID']['input'];
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationMaterial_HardDeleteAllSoftDeletedArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationMaterial_RestoreArgs = {
  idMaterial: Scalars['ID']['input'];
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationMaterial_SoftDeleteArgs = {
  idMaterial: Scalars['ID']['input'];
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationMaterial_UpdateArgs = {
  idMaterial: Scalars['ID']['input'];
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  updateOpcionInput: UpdateMaterialInput;
};


export type MutationModulo_CreateArgs = {
  createModuloInput: CreateModuloInput;
};


export type MutationModulo_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationModulo_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationModulo_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationModulo_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateCuestionarioInput: UpdateModuloInput;
};


export type MutationOpcion_CreateArgs = {
  createOpcionInput: CreateOpcionInput;
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationOpcion_HardDeleteArgs = {
  idCuestionario: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationOpcion_HardDeleteAllSoftDeletedArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationOpcion_RestoreArgs = {
  idCuestionario: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationOpcion_SoftDeleteArgs = {
  idCuestionario: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationOpcion_UpdateArgs = {
  idCuestionario: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  updateOpcionInput: UpdateOpcionInput;
};


export type MutationOrdenes_CreateArgs = {
  arrayCursosIds: Array<Scalars['ID']['input']>;
};


export type MutationOrdenes_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrdenes_PullCursoArgs = {
  arrayCursosIds: Array<Scalars['ID']['input']>;
  ordenId: Scalars['ID']['input'];
};


export type MutationOrdenes_PushCursoArgs = {
  arrayCursosIds: Array<Scalars['ID']['input']>;
  ordenId: Scalars['ID']['input'];
};


export type MutationOrdenes_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationOrdenes_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationOrdenes_UpdateArgs = {
  id: Scalars['ID']['input'];
  updateOrdenInput: UpdateOrdenInput;
};


export type MutationPregunta_CreateArgs = {
  createPreguntaInput: CreatePreguntaInput;
  idCuestionario: Scalars['ID']['input'];
};


export type MutationPregunta_HardDeleteArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationPregunta_HardDeleteAllSoftDeletedArgs = {
  idCuestionario: Scalars['ID']['input'];
};


export type MutationPregunta_RestoreArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationPregunta_SoftDeleteArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type MutationPregunta_UpdateArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  updatePreguntaInput: UpdatePreguntaInput;
};


export type MutationRespuestaCuestionario_CalcularNotaArgs = {
  idRespuestaCuestionario: Scalars['ID']['input'];
};


export type MutationRespuestaCuestionario_CreateArgs = {
  createRespuestaCuestionarioInput: CreateRespuestaCuestionarioInput;
};


export type MutationRespuestaCuestionario_HardDeleteArgs = {
  respuestaCuestionarioId: Scalars['ID']['input'];
};


export type MutationRespuestaCuestionario_RestoreArgs = {
  respuestaCuestionarioId: Scalars['ID']['input'];
};


export type MutationRespuestaCuestionario_SoftDeleteArgs = {
  respuestaCuestionarioId: Scalars['ID']['input'];
};


export type MutationRespuestaCuestionario_UpdateArgs = {
  respuestaCuestionarioUpdateId: Scalars['ID']['input'];
  updateRespuestaCuestionarioInput: UpdateRespuestaCuestionarioInput;
};


export type MutationRespuestaPregunta_CreateArgs = {
  createRespuestaPregunta_ResolverInput: CreateRespuestaPregunta_ResolverInput;
  idCurso: Scalars['ID']['input'];
};


export type MutationUnidad_CreateArgs = {
  createUnidadInput: CreateUnidadInput;
  idModulo: Scalars['ID']['input'];
};


export type MutationUnidad_HardDeleteArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationUnidad_HardDeleteAllSoftDeletedArgs = {
  idModulo: Scalars['ID']['input'];
};


export type MutationUnidad_RestoreArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationUnidad_SoftDeleteArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type MutationUnidad_UpdateArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  updateUnidadInput: UpdateUnidadInput;
};


export type MutationJwt_RequestPasswordResetArgs = {
  requestPasswordResetInput: RequestPasswordResetInput;
};


export type MutationJwt_ResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationJwt_UpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignupArgs = {
  createUsuarioInput: CreateUsuarioInput;
};


export type MutationUsuario_CreateArgs = {
  createUsuarioInput: CreateUsuarioInput;
};


export type MutationUsuario_HardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUsuario_RestoreArgs = {
  idRestore: Scalars['ID']['input'];
};


export type MutationUsuario_SoftDeleteArgs = {
  idRemove: Scalars['ID']['input'];
};


export type MutationUsuario_Update_OnlyAdminArgs = {
  id: Scalars['ID']['input'];
  updateUsuarioInput: UpdateUsuarioInput;
};


export type MutationUsuario_Update_OnlyUserArgs = {
  updateUsuarioInput: UpdateUsuarioInput;
};

/** Niveles de un curso */
export enum Nivel {
  Avanzado = 'Avanzado',
  Intermedio = 'Intermedio',
  Principiante = 'Principiante'
}

export type Opcion = {
  __typename?: 'Opcion';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  esCorrecta: Scalars['Boolean']['output'];
  orden?: Maybe<Scalars['Int']['output']>;
  textOpcion: Scalars['String']['output'];
};

export type Orden = {
  __typename?: 'Orden';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  estado_orden: EstadoOrden;
  listaCursos: Array<OrdenCursoItem>;
  montoTotal: Scalars['Float']['output'];
  usuarioId: Scalars['ID']['output'];
};

export type OrdenCursoItem = {
  __typename?: 'OrdenCursoItem';
  courseTitle: Scalars['String']['output'];
  cursoId: Scalars['ID']['output'];
  descuento?: Maybe<Scalars['Float']['output']>;
  precio: Scalars['Float']['output'];
};

export type Perfil = {
  __typename?: 'Perfil';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  celular?: Maybe<Scalars['String']['output']>;
  contacto?: Maybe<Scalars['String']['output']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']['output']>;
  intereses?: Maybe<Array<Scalars['String']['output']>>;
  ubicacion?: Maybe<Scalars['String']['output']>;
};

export type Pregunta = {
  __typename?: 'Pregunta';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  enunciado?: Maybe<Scalars['String']['output']>;
  moduloId?: Maybe<Scalars['ID']['output']>;
  opciones?: Maybe<Array<Opcion>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  puntos?: Maybe<Scalars['Float']['output']>;
  tipoPregunta?: Maybe<TipoPregunta>;
  unidadId?: Maybe<Scalars['ID']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Calificacion: Calificacion;
  Calificacion_findSoftDeleted: Array<Calificacion>;
  Calificacion_promedioCalificaciones: Scalars['Float']['output'];
  Calificaciones: Array<Calificacion>;
  Calificaciones_PorCurso: Array<Calificacion>;
  Calificaciones_PorUsuario: Array<Calificacion>;
  Categoria: Categoria;
  Categorias: Array<Categoria>;
  Categorias_findAllByNombre: Array<Categoria>;
  Categorias_findSoftDeleted: Array<Categoria>;
  Comentario: Comentario;
  Comentario_findSoftDeleted: Array<Comentario>;
  Comentarios: Array<Comentario>;
  Comentarios_PorCurso: Array<Comentario>;
  Comentarios_PorUsuario: Array<Comentario>;
  Cuestionario: Cuestionario;
  Cuestionario_findByCursoId: Array<Cuestionario>;
  Cuestionario_findSoftDeleted: Array<Cuestionario>;
  Cuestionarios: Array<Cuestionario>;
  Curso: CursoOutput;
  CursoComprado: CursoComprado;
  CursoComprado_findSoftDeleted: Array<CursoComprado>;
  CursoCompradoes_PorCurso: Array<CursoComprado>;
  CursoCompradoes_PorUsuario: Array<CursoComprado>;
  CursoComprados: Array<CursoComprado>;
  Curso_findAllByTitle: Array<CursoOutput>;
  Curso_findSoftDeleted: Array<CursoOutput>;
  Cursos: Array<CursoOutput>;
  Instructor: Instructor;
  Instructor_findAllByNombre: Array<Instructor>;
  Instructor_findSoftDeleted: Array<Instructor>;
  Instructores: Array<Instructor>;
  Material: Material;
  Material_findSoftDeleted: Array<Material>;
  Materiales: Array<Material>;
  Modulo: Modulo;
  Modulo_findByCursoId: Array<Modulo>;
  Modulo_findSoftDeleted: Array<Modulo>;
  Modulos: Array<Modulo>;
  Opcion: Opcion;
  Opcion_findSoftDeleted: Array<Opcion>;
  Opciones: Array<Opcion>;
  Orden: Orden;
  Ordenes: Array<Orden>;
  Ordenes_findAllByCursoId: Array<Orden>;
  Ordenes_findAllByUsuarioId: Array<Orden>;
  Ordenes_findSoftDeleted: Array<Orden>;
  Pregunta: Pregunta;
  Pregunta_findSoftDeleted: Array<Pregunta>;
  Preguntas: Array<Pregunta>;
  RespuestaCuestionario: RespuestaCuestionario;
  RespuestaCuestionario_byCursoId: Array<RespuestaCuestionario>;
  RespuestaCuestionario_byUsuarioId: Array<RespuestaCuestionario>;
  RespuestaCuestionario_findSoftDeleted: Array<RespuestaCuestionario>;
  RespuestaCuestionarios: Array<RespuestaCuestionario>;
  RespuestaPregunta: RespuestaPregunta;
  RespuestaPreguntas: Array<RespuestaPregunta>;
  Unidad: Unidad;
  Unidad_findSoftDeleted: Array<Unidad>;
  Unidades: Array<Unidad>;
  usuario: UsuarioOutput;
  usuario_findByEmail: UsuarioOutput;
  usuarios: Array<UsuarioOutput>;
  usuarios_findAllBy: Array<UsuarioOutput>;
  usuarios_findAllByFirstname: Array<UsuarioOutput>;
  /** Obtiene una lista de usuarios filtrados por roles específicos. */
  usuarios_findByRol: Array<UsuarioOutput>;
  /** Obtiene una lista de usuarios eliminados. */
  usuarios_findSoftDeleted: Array<UsuarioOutput>;
};


export type QueryCalificacionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCalificacion_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCalificacion_PromedioCalificacionesArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryCalificacionesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCalificaciones_PorCursoArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryCalificaciones_PorUsuarioArgs = {
  usuarioId: Scalars['ID']['input'];
};


export type QueryCategoriaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriasArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategorias_FindAllByNombreArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategorias_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryComentarioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComentario_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryComentariosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryComentarios_PorCursoArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryComentarios_PorUsuarioArgs = {
  usuarioId: Scalars['ID']['input'];
};


export type QueryCuestionarioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCuestionario_FindByCursoIdArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryCuestionario_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCuestionariosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCursoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCursoCompradoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCursoComprado_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCursoCompradoes_PorCursoArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryCursoCompradoes_PorUsuarioArgs = {
  usuarioId: Scalars['ID']['input'];
};


export type QueryCursoCompradosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurso_FindAllByTitleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurso_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCursosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInstructorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInstructor_FindAllByNombreArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstructor_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInstructoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMaterialArgs = {
  idMaterial: Scalars['ID']['input'];
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type QueryMaterial_FindSoftDeletedArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type QueryMaterialesArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type QueryModuloArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModulo_FindByCursoIdArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryModulo_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModulosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOpcionArgs = {
  idCuestionario: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type QueryOpcion_FindSoftDeletedArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type QueryOpcionesArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type QueryOrdenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdenesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrdenes_FindAllByCursoIdArgs = {
  idCurso: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrdenes_FindAllByUsuarioIdArgs = {
  idUsuario: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrdenes_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPreguntaArgs = {
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type QueryPregunta_FindSoftDeletedArgs = {
  idCuestionario: Scalars['ID']['input'];
};


export type QueryPreguntasArgs = {
  idCuestionario: Scalars['ID']['input'];
};


export type QueryRespuestaCuestionarioArgs = {
  respuestaCuestionarioId: Scalars['ID']['input'];
};


export type QueryRespuestaCuestionario_ByCursoIdArgs = {
  cursoId: Scalars['ID']['input'];
};


export type QueryRespuestaCuestionario_ByUsuarioIdArgs = {
  usuarioId: Scalars['ID']['input'];
};


export type QueryRespuestaCuestionario_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRespuestaCuestionariosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRespuestaPreguntaArgs = {
  idCurso: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
};


export type QueryRespuestaPreguntasArgs = {
  idRespuestaCuestionario: Scalars['ID']['input'];
};


export type QueryUnidadArgs = {
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
};


export type QueryUnidad_FindSoftDeletedArgs = {
  idModulo: Scalars['ID']['input'];
};


export type QueryUnidadesArgs = {
  idModulo: Scalars['ID']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsuario_FindByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUsuariosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsuarios_FindAllByArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsuarios_FindAllByFirstnameArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsuarios_FindByRolArgs = {
  objetoRoles: RolesInput;
};


export type QueryUsuarios_FindSoftDeletedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RequestPasswordResetInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RespuestaCuestionario = {
  __typename?: 'RespuestaCuestionario';
  _id: Scalars['ID']['output'];
  cuestionarioId: Scalars['ID']['output'];
  cursoId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  estado: EstadoCuestionario;
  fecha: Scalars['DateTime']['output'];
  nota?: Maybe<Scalars['Float']['output']>;
  respuestas?: Maybe<Array<RespuestaPregunta>>;
  usuarioId: Scalars['ID']['output'];
};

export type RespuestaData = {
  __typename?: 'RespuestaData';
  _id?: Maybe<Scalars['ID']['output']>;
  orden?: Maybe<Scalars['Int']['output']>;
  textOpcion?: Maybe<Scalars['String']['output']>;
};

export type RespuestaDataInput = {
  _id: Scalars['ID']['input'];
  orden?: InputMaybe<Scalars['Int']['input']>;
  textOpcion: Scalars['String']['input'];
};

export type RespuestaPregunta = {
  __typename?: 'RespuestaPregunta';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  esCorrecto: Scalars['Boolean']['output'];
  preguntaId: Scalars['ID']['output'];
  respuestaAbierta?: Maybe<Scalars['String']['output']>;
  respuestaId?: Maybe<Array<RespuestaData>>;
  tipoPregunta?: Maybe<TipoPregunta>;
};

/** Roles disponibles para los usuarios */
export enum RolEnumGql {
  Administrador = 'ADMINISTRADOR',
  Editor = 'EDITOR',
  Estudiante = 'ESTUDIANTE',
  Instructor = 'INSTRUCTOR',
  Superadmin = 'SUPERADMIN'
}

export type RolesInput = {
  roles?: InputMaybe<Array<RolEnumGql>>;
};

/** Tipos de preguntas */
export enum TipoPregunta {
  Abierta = 'ABIERTA',
  Alternativa = 'ALTERNATIVA',
  OpcionMultiple = 'OPCION_MULTIPLE',
  Ordenamiento = 'ORDENAMIENTO'
}

export type Unidad = {
  __typename?: 'Unidad';
  _id: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  descripcion?: Maybe<Scalars['String']['output']>;
  materiales?: Maybe<Array<Material>>;
  moduloId: Scalars['ID']['output'];
  numeroUnidad: Scalars['Int']['output'];
  unidadTitle: Scalars['String']['output'];
  urlVideo?: Maybe<Scalars['String']['output']>;
};

export type UpdateCalificacionInput = {
  comentario?: InputMaybe<Scalars['String']['input']>;
  cursoId?: InputMaybe<Scalars['ID']['input']>;
  valor?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCategoriaInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  nombreCategoria?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateComentarioInput = {
  comentario?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCuestionarioInput = {
  cuestionarioTitle?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  notaMaxima?: InputMaybe<Scalars['Float']['input']>;
  notaMinimaAprobar?: InputMaybe<Scalars['Float']['input']>;
  numeroPreguntasPresentar?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCursoInput = {
  aprenderas?: InputMaybe<Array<Scalars['String']['input']>>;
  categorias?: InputMaybe<Array<Scalars['ID']['input']>>;
  courseTitle?: InputMaybe<Scalars['String']['input']>;
  cuestionarioId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  descripcionCorta?: InputMaybe<Scalars['String']['input']>;
  descripcionLarga?: InputMaybe<Scalars['String']['input']>;
  descuento?: InputMaybe<Scalars['Float']['input']>;
  dirigidoA?: InputMaybe<Array<Scalars['String']['input']>>;
  duracionHoras?: InputMaybe<Scalars['Float']['input']>;
  fechaLanzamiento?: InputMaybe<Scalars['DateTime']['input']>;
  imagenURL?: InputMaybe<ImageInput>;
  instructor?: InputMaybe<Scalars['ID']['input']>;
  modulosIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  nivel?: InputMaybe<Nivel>;
  objetivos?: InputMaybe<Array<Scalars['String']['input']>>;
  precio?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInstructorInput = {
  especializacion?: InputMaybe<Array<Scalars['String']['input']>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pais?: InputMaybe<Scalars['String']['input']>;
  profesion?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMaterialInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  materialTitle?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateModuloInput = {
  cursoIdString?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  moduloTitle?: InputMaybe<Scalars['String']['input']>;
  numeroModulo?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateOpcionInput = {
  esCorrecta?: InputMaybe<Scalars['Boolean']['input']>;
  orden?: InputMaybe<Scalars['Int']['input']>;
  textOpcion?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrdenInput = {
  estado_orden: EstadoOrden;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePreguntaInput = {
  enunciado?: InputMaybe<Scalars['String']['input']>;
  moduloId?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  puntos?: InputMaybe<Scalars['Float']['input']>;
  respuestaOrdenamiento?: InputMaybe<Scalars['String']['input']>;
  tipoPregunta?: InputMaybe<TipoPregunta>;
  unidadId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateRespuestaCuestionarioInput = {
  cuestionarioId?: InputMaybe<Scalars['ID']['input']>;
  cursoId?: InputMaybe<Scalars['ID']['input']>;
  estado?: InputMaybe<EstadoCuestionario>;
  nota?: InputMaybe<Scalars['Float']['input']>;
  respuestas?: InputMaybe<Array<CreateRespuestaPreguntaInput>>;
  usuarioId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUnidadInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  materiales?: InputMaybe<Array<CreateMaterialInput>>;
  numeroUnidad?: InputMaybe<Scalars['Int']['input']>;
  unidadTitle?: InputMaybe<Scalars['String']['input']>;
  urlVideo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUsuarioInput = {
  cursosFavoritos?: InputMaybe<Array<Scalars['ID']['input']>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notificaciones?: InputMaybe<Scalars['Boolean']['input']>;
  perfil?: InputMaybe<CreatePerfilInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type UserJwtOutput = {
  __typename?: 'UserJwtOutput';
  accessToken: Scalars['String']['output'];
  user: UserRequest;
};

export type UserRequest = {
  __typename?: 'UserRequest';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  exp?: Maybe<Scalars['Int']['output']>;
  firstName: Scalars['String']['output'];
  iat?: Maybe<Scalars['Int']['output']>;
  lastName: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  roles: Array<RolEnumGql>;
};

/** Estados de un usuario */
export enum UserStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED'
}

export type Usuario = {
  __typename?: 'Usuario';
  _id: Scalars['ID']['output'];
  cursosFavoritos?: Maybe<Array<Curso>>;
  deleted: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  isGoogleAuth: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  notificaciones: Scalars['Boolean']['output'];
  perfil?: Maybe<Perfil>;
  picture?: Maybe<Scalars['String']['output']>;
  roles: Array<RolEnumGql>;
  status: UserStatus;
};

export type UsuarioOutput = {
  __typename?: 'UsuarioOutput';
  _id: Scalars['ID']['output'];
  cursosFavoritos?: Maybe<Array<Curso>>;
  deleted: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  isGoogleAuth: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  notificaciones: Scalars['Boolean']['output'];
  perfil?: Maybe<Perfil>;
  picture?: Maybe<Scalars['String']['output']>;
  roles: Array<RolEnumGql>;
  status: UserStatus;
};

export type ExampleQueryQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type ExampleQueryQuery = { __typename?: 'Query', usuario: { __typename?: 'UsuarioOutput', _id: string } };

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserRequest', _id: string, roles: Array<RolEnumGql>, iat?: number | null, exp?: number | null, email: string, email_verified: boolean, firstName: string, lastName: string, picture?: string | null } };

export type SignupMutationVariables = Exact<{
  createUsuarioInput: CreateUsuarioInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'UsuarioOutput', _id: string, firstName?: string | null, lastName?: string | null, email: string, email_verified: boolean, roles: Array<RolEnumGql>, picture?: string | null, notificaciones: boolean, status: UserStatus, deleted: boolean, perfil?: { __typename?: 'Perfil', _id: string, bio?: string | null, ubicacion?: string | null, celular?: string | null, fechaNacimiento?: any | null, contacto?: string | null, intereses?: Array<string> | null } | null, cursosFavoritos?: Array<{ __typename?: 'Curso', _id: string }> | null } };

export type Calificacion_CreateMutationVariables = Exact<{
  createCalificacionInput: CreateCalificacion_UserInput;
}>;


export type Calificacion_CreateMutation = { __typename?: 'Mutation', Calificacion_create: { __typename?: 'Calificacion', valor: number, fecha: any, comentario?: string | null, _id: string, cursoId: string, usuarioId: string } };

export type CalificacionesQueryVariables = Exact<{ [key: string]: never; }>;


export type CalificacionesQuery = { __typename?: 'Query', Calificaciones: Array<{ __typename?: 'Calificacion', _id: string, comentario?: string | null, valor: number, fecha: any, cursoId: string, usuarioId: string }> };

export type Calificaciones_PorUsuarioQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type Calificaciones_PorUsuarioQuery = { __typename?: 'Query', Calificaciones_PorUsuario: Array<{ __typename?: 'Calificacion', valor: number, usuarioId: string, cursoId: string, comentario?: string | null, fecha: any, _id: string, deleted: boolean }> };

export type Calificaciones_PorCursoQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type Calificaciones_PorCursoQuery = { __typename?: 'Query', Calificaciones_PorCurso: Array<{ __typename?: 'Calificacion', valor: number, usuarioId: string, fecha: any, cursoId: string, comentario?: string | null, _id: string }> };

export type CalificacionQueryVariables = Exact<{
  calificacionId: Scalars['ID']['input'];
}>;


export type CalificacionQuery = { __typename?: 'Query', Calificacion: { __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean } };

export type QueryQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', Calificacion_promedioCalificaciones: number };

export type Calificacion_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Calificacion_FindSoftDeletedQuery = { __typename?: 'Query', Calificacion_findSoftDeleted: Array<{ __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean }> };

export type Calificacion_UpdateMutationVariables = Exact<{
  calificacionUpdateId: Scalars['ID']['input'];
  updateCalificacionInput: UpdateCalificacionInput;
}>;


export type Calificacion_UpdateMutation = { __typename?: 'Mutation', Calificacion_update: { __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean } };

export type Calificacion_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Calificacion_SoftDeleteMutation = { __typename?: 'Mutation', Calificacion_softDelete: { __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean } };

export type Calificacion_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Calificacion_RestoreMutation = { __typename?: 'Mutation', Calificacion_restore: { __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean } };

export type Calificacion_HardDeleteMutationVariables = Exact<{
  calificacionHardDeleteId: Scalars['ID']['input'];
}>;


export type Calificacion_HardDeleteMutation = { __typename?: 'Mutation', Calificacion_hardDelete: { __typename?: 'Calificacion', _id: string, usuarioId: string, cursoId: string, valor: number, comentario?: string | null, fecha: any, deleted: boolean } };

export type Calificacion_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Calificacion_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Calificacion_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Categorias_CreateMutationVariables = Exact<{
  createCategoriaInput: CreateCategoriaInput;
}>;


export type Categorias_CreateMutation = { __typename?: 'Mutation', Categorias_create: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type CategoriasQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriasQuery = { __typename?: 'Query', Categorias: Array<{ __typename?: 'Categoria', _id: string, descripcion?: string | null, deleted: boolean, nombreCategoria: string }> };

export type CategoriaQueryVariables = Exact<{
  categoriaId: Scalars['ID']['input'];
}>;


export type CategoriaQuery = { __typename?: 'Query', Categoria: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type Categorias_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Categorias_SoftDeleteMutation = { __typename?: 'Mutation', Categorias_softDelete: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type Categorias_HardDeleteMutationVariables = Exact<{
  categoriasHardDeleteId: Scalars['ID']['input'];
}>;


export type Categorias_HardDeleteMutation = { __typename?: 'Mutation', Categorias_hardDelete: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type Categorias_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Categorias_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Categorias_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Categorias_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Categorias_FindSoftDeletedQuery = { __typename?: 'Query', Categorias_findSoftDeleted: Array<{ __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean }> };

export type Categorias_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Categorias_RestoreMutation = { __typename?: 'Mutation', Categorias_restore: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type Categorias_FindAllByNombreQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type Categorias_FindAllByNombreQuery = { __typename?: 'Query', Categorias_findAllByNombre: Array<{ __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean }> };

export type Categorias_UpdateMutationVariables = Exact<{
  categoriasUpdateId: Scalars['ID']['input'];
  updateCategoriaInput: UpdateCategoriaInput;
}>;


export type Categorias_UpdateMutation = { __typename?: 'Mutation', Categorias_update: { __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean } };

export type Comentario_UpdateMutationVariables = Exact<{
  updateComentarioInput: UpdateComentarioInput;
  comentarioUpdateId: Scalars['ID']['input'];
}>;


export type Comentario_UpdateMutation = { __typename?: 'Mutation', Comentario_update: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentario_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Comentario_RestoreMutation = { __typename?: 'Mutation', Comentario_restore: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentario_HardDeleteMutationVariables = Exact<{
  comentarioHardDeleteId: Scalars['ID']['input'];
}>;


export type Comentario_HardDeleteMutation = { __typename?: 'Mutation', Comentario_hardDelete: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentarios_PorCursoQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type Comentarios_PorCursoQuery = { __typename?: 'Query', Comentarios_PorCurso: Array<{ __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean }> };

export type Comentario_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Comentario_SoftDeleteMutation = { __typename?: 'Mutation', Comentario_softDelete: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentarios_PorUsuarioQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type Comentarios_PorUsuarioQuery = { __typename?: 'Query', Comentarios_PorUsuario: Array<{ __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean }> };

export type Comentario_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Comentario_FindSoftDeletedQuery = { __typename?: 'Query', Comentario_findSoftDeleted: Array<{ __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean }> };

export type ComentariosQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ComentariosQuery = { __typename?: 'Query', Comentarios: Array<{ __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean }> };

export type ComentarioQueryVariables = Exact<{
  comentarioId: Scalars['ID']['input'];
}>;


export type ComentarioQuery = { __typename?: 'Query', Comentario: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentario_CreateMutationVariables = Exact<{
  createComentarioInput: CreateComentario_UserInput;
}>;


export type Comentario_CreateMutation = { __typename?: 'Mutation', Comentario_create: { __typename?: 'Comentario', _id: string, usuarioId: string, cursoId: string, comentario: string, fecha: any, deleted: boolean } };

export type Comentario_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Comentario_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Comentario_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type CuestionariosQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CuestionariosQuery = { __typename?: 'Query', Cuestionarios: Array<{ __typename?: 'Cuestionario', _id: string, cursoId: string, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> }> };

export type CuestionarioQueryVariables = Exact<{
  cuestionarioId: Scalars['ID']['input'];
}>;


export type CuestionarioQuery = { __typename?: 'Query', Cuestionario: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, published?: boolean | null, descripcion?: string | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, published?: boolean | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> } };

export type Cuestionario_UpdateMutationVariables = Exact<{
  updateCuestionarioInput: UpdateCuestionarioInput;
  cuestionarioUpdateId: Scalars['ID']['input'];
}>;


export type Cuestionario_UpdateMutation = { __typename?: 'Mutation', Cuestionario_update: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean } };

export type Cuestionario_HardDeleteMutationVariables = Exact<{
  cuestionarioHardDeleteId: Scalars['ID']['input'];
}>;


export type Cuestionario_HardDeleteMutation = { __typename?: 'Mutation', Cuestionario_hardDelete: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> } };

export type Cuestionario_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Cuestionario_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Cuestionario_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Cuestionario_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Cuestionario_FindSoftDeletedQuery = { __typename?: 'Query', Cuestionario_findSoftDeleted: Array<{ __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> }> };

export type Cuestionario_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Cuestionario_RestoreMutation = { __typename?: 'Mutation', Cuestionario_restore: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> } };

export type Cuestionario_CreateMutationVariables = Exact<{
  createCuestionarioInput: CreateCuestionarioInput;
}>;


export type Cuestionario_CreateMutation = { __typename?: 'Mutation', Cuestionario_create: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> } };

export type Cuestionario_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Cuestionario_SoftDeleteMutation = { __typename?: 'Mutation', Cuestionario_softDelete: { __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> } };

export type Cuestionario_FindByCursoIdQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type Cuestionario_FindByCursoIdQuery = { __typename?: 'Query', Cuestionario_findByCursoId: Array<{ __typename?: 'Cuestionario', _id: string, cursoId: string, cuestionarioTitle?: string | null, descripcion?: string | null, published?: boolean | null, notaMaxima?: number | null, notaMinimaAprobar?: number | null, fechaCreacion: any, deleted: boolean, preguntas: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> }> };

export type CursoComprado_CreateMutationVariables = Exact<{
  createCursoCompradoInput: CreateCursoComprado_UserInput;
}>;


export type CursoComprado_CreateMutation = { __typename?: 'Mutation', CursoComprado_create: { __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, usuarioId: { __typename?: 'Usuario', _id: string, email: string }, cursoId: { __typename?: 'Curso', _id: string, courseTitle: string } } };

export type CursoCompradoesQueryVariables = Exact<{ [key: string]: never; }>;


export type CursoCompradoesQuery = { __typename?: 'Query', CursoComprados: Array<{ __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, usuarioId: { __typename?: 'Usuario', _id: string }, cursoId: { __typename?: 'Curso', _id: string } }> };

export type CursoCompradoQueryVariables = Exact<{
  cursoCompradoId: Scalars['ID']['input'];
}>;


export type CursoCompradoQuery = { __typename?: 'Query', CursoComprado: { __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, usuarioId: { __typename?: 'Usuario', _id: string }, cursoId: { __typename?: 'Curso', _id: string } } };

export type CursoComprado_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type CursoComprado_SoftDeleteMutation = { __typename?: 'Mutation', CursoComprado_softDelete: { __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean } };

export type CursoComprado_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type CursoComprado_RestoreMutation = { __typename?: 'Mutation', CursoComprado_restore: { __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean } };

export type CursoComprado_HardDeleteMutationVariables = Exact<{
  cursoCompradoHardDeleteId: Scalars['ID']['input'];
}>;


export type CursoComprado_HardDeleteMutation = { __typename?: 'Mutation', CursoComprado_hardDelete: { __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean } };

export type CursoComprado_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type CursoComprado_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', CursoComprado_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type CursoCompradoes_PorUsuarioQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type CursoCompradoes_PorUsuarioQuery = { __typename?: 'Query', CursoCompradoes_PorUsuario: Array<{ __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, cursoId: { __typename?: 'Curso', _id: string }, usuarioId: { __typename?: 'Usuario', _id: string } }> };

export type CursoCompradoes_PorCursoQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type CursoCompradoes_PorCursoQuery = { __typename?: 'Query', CursoCompradoes_PorCurso: Array<{ __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, usuarioId: { __typename?: 'Usuario', _id: string }, cursoId: { __typename?: 'Curso', _id: string } }> };

export type CursoComprado_FindSoftDeletedQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CursoComprado_FindSoftDeletedQuery = { __typename?: 'Query', CursoComprado_findSoftDeleted: Array<{ __typename?: 'CursoComprado', _id: string, courseTitle: string, fechaCompra: any, fechaExpiracion?: any | null, estadoAcceso: EstadoAccesoCurso, progreso: number, cursoCompletado: boolean, ultimaNota?: number | null, deleted: boolean, usuarioId: { __typename?: 'Usuario', _id: string }, cursoId: { __typename?: 'Curso', _id: string } }> };

export type MutationMutationVariables = Exact<{
  createCursoInput: CreateCursoInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', Curso_create: { __typename?: 'CursoOutput', _id: string, courseTitle: string, precio?: number | null, objetivos: Array<string>, nivel?: Nivel | null, fechaLanzamiento?: any | null, descripcionCorta: string, categorias: Array<{ __typename?: 'Categoria', nombreCategoria: string, descripcion?: string | null, _id: string }>, imagenURL?: { __typename?: 'ImageObjectType', url: string, alt: string } | null } };

export type CursosQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CursosQuery = { __typename?: 'Query', Cursos: Array<{ __typename?: 'CursoOutput', _id: string, courseTitle: string, instructor?: { __typename?: 'Instructor', firstName: string } | null, imagenURL?: { __typename?: 'ImageObjectType', url: string, alt: string } | null }> };

export type CursoQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type CursoQuery = { __typename?: 'Query', Curso: { __typename?: 'CursoOutput', _id: string, courseTitle: string, descripcionCorta: string, descripcionLarga?: string | null, nivel?: Nivel | null, duracionHoras?: number | null, precio?: number | null, currency?: string | null, descuento?: number | null, calificacionPromedio?: number | null, numeroCalificaciones: number, aprenderas: Array<string>, objetivos: Array<string>, dirigidoA: Array<string>, fechaLanzamiento?: any | null, slug?: string | null, deleted: boolean, modulosIds?: Array<string> | null, instructor?: { __typename?: 'Instructor', firstName: string } | null, imagenURL?: { __typename?: 'ImageObjectType', alt: string, url: string } | null } };

export type Curso_UpdateMutationVariables = Exact<{
  cursoUpdateId: Scalars['ID']['input'];
  updateCursoInput: UpdateCursoInput;
}>;


export type Curso_UpdateMutation = { __typename?: 'Mutation', Curso_update: { __typename?: 'CursoOutput', _id: string, courseTitle: string, descripcionCorta: string, descripcionLarga?: string | null, nivel?: Nivel | null, duracionHoras?: number | null, precio?: number | null, currency?: string | null, descuento?: number | null, calificacionPromedio?: number | null, numeroCalificaciones: number, aprenderas: Array<string>, objetivos: Array<string>, dirigidoA: Array<string>, fechaLanzamiento?: any | null, slug?: string | null, deleted: boolean, instructor?: { __typename?: 'Instructor', _id: string, firstName: string } | null, imagenURL?: { __typename?: 'ImageObjectType', alt: string, url: string } | null, categorias: Array<{ __typename?: 'Categoria', _id: string, nombreCategoria: string, descripcion?: string | null, deleted: boolean }>, cuestionarioId?: { __typename?: 'Cuestionario', _id: string } | null } };

export type Curso_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Curso_SoftDeleteMutation = { __typename?: 'Mutation', Curso_softDelete: { __typename?: 'CursoOutput', courseTitle: string, _id: string, descripcionCorta: string } };

export type Curso_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Curso_FindSoftDeletedQuery = { __typename?: 'Query', Curso_findSoftDeleted: Array<{ __typename?: 'CursoOutput', courseTitle: string, _id: string, descripcionCorta: string, cuestionarioId?: { __typename?: 'Cuestionario', _id: string } | null }> };

export type Curso_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Curso_RestoreMutation = { __typename?: 'Mutation', Curso_restore: { __typename?: 'CursoOutput', courseTitle: string, _id: string, descripcionCorta: string } };

export type Curso_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Curso_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Curso_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Curso_HardDeleteMutationVariables = Exact<{
  cursoHardDeleteId: Scalars['ID']['input'];
}>;


export type Curso_HardDeleteMutation = { __typename?: 'Mutation', Curso_hardDelete: { __typename?: 'CursoOutput', courseTitle: string, _id: string } };

export type Curso_FindAllByTitleQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type Curso_FindAllByTitleQuery = { __typename?: 'Query', Curso_findAllByTitle: Array<{ __typename?: 'CursoOutput', duracionHoras?: number | null, courseTitle: string, precio?: number | null, _id: string }> };

export type Instructor_CreateMutationVariables = Exact<{
  createInstructorInput: CreateInstructorInput;
}>;


export type Instructor_CreateMutation = { __typename?: 'Mutation', Instructor_create: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type InstructorQueryVariables = Exact<{
  instructorId: Scalars['ID']['input'];
}>;


export type InstructorQuery = { __typename?: 'Query', Instructor: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type InstructoresQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InstructoresQuery = { __typename?: 'Query', Instructores: Array<{ __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean }> };

export type Instructor_HardDeleteMutationVariables = Exact<{
  instructorHardDeleteId: Scalars['ID']['input'];
}>;


export type Instructor_HardDeleteMutation = { __typename?: 'Mutation', Instructor_hardDelete: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type Instructor_FindAllByNombreQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type Instructor_FindAllByNombreQuery = { __typename?: 'Query', Instructor_findAllByNombre: Array<{ __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean }> };

export type Instructor_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Instructor_RestoreMutation = { __typename?: 'Mutation', Instructor_restore: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type Instructor_UpdateMutationVariables = Exact<{
  updateInstructorInput: UpdateInstructorInput;
  instructorUpdateId: Scalars['ID']['input'];
}>;


export type Instructor_UpdateMutation = { __typename?: 'Mutation', Instructor_update: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type Instructor_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Instructor_SoftDeleteMutation = { __typename?: 'Mutation', Instructor_softDelete: { __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean } };

export type Instructor_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Instructor_FindSoftDeletedQuery = { __typename?: 'Query', Instructor_findSoftDeleted: Array<{ __typename?: 'Instructor', _id: string, firstName: string, lastName: string, profesion?: string | null, especializacion: Array<string>, calificacionPromedio: number, pais?: string | null, deleted: boolean }> };

export type Instructor_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Instructor_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Instructor_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Material_CreateMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  createOpcionInput: CreateMaterialInput;
}>;


export type Material_CreateMutation = { __typename?: 'Mutation', Material_create: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string } };

export type MaterialesQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type MaterialesQuery = { __typename?: 'Query', Materiales: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> };

export type MaterialQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  idMaterial: Scalars['ID']['input'];
}>;


export type MaterialQuery = { __typename?: 'Query', Material: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean } };

export type Material_UpdateMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  idMaterial: Scalars['ID']['input'];
  updateOpcionInput: UpdateMaterialInput;
}>;


export type Material_UpdateMutation = { __typename?: 'Mutation', Material_update: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean } };

export type Material_SoftDeleteMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  idMaterial: Scalars['ID']['input'];
}>;


export type Material_SoftDeleteMutation = { __typename?: 'Mutation', Material_softDelete: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean } };

export type Material_FindSoftDeletedQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type Material_FindSoftDeletedQuery = { __typename?: 'Query', Material_findSoftDeleted: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean }> };

export type Material_RestoreMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  idMaterial: Scalars['ID']['input'];
}>;


export type Material_RestoreMutation = { __typename?: 'Mutation', Material_restore: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean } };

export type Material_HardDeleteMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  idMaterial: Scalars['ID']['input'];
}>;


export type Material_HardDeleteMutation = { __typename?: 'Mutation', Material_hardDelete: { __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean } };

export type Material_HardDeleteAllSoftDeletedMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type Material_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Material_hardDeleteAllSoftDeleted: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string, deleted: boolean }> };

export type Modulo_CreateMutationVariables = Exact<{
  createModuloInput: CreateModuloInput;
}>;


export type Modulo_CreateMutation = { __typename?: 'Mutation', Modulo_create: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type ModulosQueryVariables = Exact<{ [key: string]: never; }>;


export type ModulosQuery = { __typename?: 'Query', Modulos: Array<{ __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null }> };

export type ModuloQueryVariables = Exact<{
  moduloId: Scalars['ID']['input'];
}>;


export type ModuloQuery = { __typename?: 'Query', Modulo: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type Modulo_FindByCursoIdQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type Modulo_FindByCursoIdQuery = { __typename?: 'Query', Modulo_findByCursoId: Array<{ __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null }> };

export type Modulo_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Modulo_FindSoftDeletedQuery = { __typename?: 'Query', Modulo_findSoftDeleted: Array<{ __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null }> };

export type Modulo_UpdateMutationVariables = Exact<{
  updateCuestionarioInput: UpdateModuloInput;
  moduloUpdateId: Scalars['ID']['input'];
}>;


export type Modulo_UpdateMutation = { __typename?: 'Mutation', Modulo_update: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type Modulo_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Modulo_SoftDeleteMutation = { __typename?: 'Mutation', Modulo_softDelete: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type Modulo_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Modulo_RestoreMutation = { __typename?: 'Mutation', Modulo_restore: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type Modulo_HardDeleteMutationVariables = Exact<{
  moduloHardDeleteId: Scalars['ID']['input'];
}>;


export type Modulo_HardDeleteMutation = { __typename?: 'Mutation', Modulo_hardDelete: { __typename?: 'Modulo', _id: string, cursoId: string, numeroModulo: number, moduloTitle: string, descripcion?: string | null, deleted: boolean, unidades?: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> | null } };

export type Modulo_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Modulo_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Modulo_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Opcion_CreateMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  createOpcionInput: CreateOpcionInput;
}>;


export type Opcion_CreateMutation = { __typename?: 'Mutation', Opcion_create: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type Opcion_FindByIdQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
}>;


export type Opcion_FindByIdQuery = { __typename?: 'Query', Opcion: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type Opcion_UpdateMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
  updateOpcionInput: UpdateOpcionInput;
}>;


export type Opcion_UpdateMutation = { __typename?: 'Mutation', Opcion_update: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type OpcionesQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type OpcionesQuery = { __typename?: 'Query', Opciones: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> };

export type Opcion_SoftDeleteMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
}>;


export type Opcion_SoftDeleteMutation = { __typename?: 'Mutation', Opcion_softDelete: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type Opcion_RestoreMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
}>;


export type Opcion_RestoreMutation = { __typename?: 'Mutation', Opcion_restore: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type Opcion_FindSoftDeletedQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type Opcion_FindSoftDeletedQuery = { __typename?: 'Query', Opcion_findSoftDeleted: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> };

export type Opcion_HardDeleteMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  idOpcion: Scalars['ID']['input'];
}>;


export type Opcion_HardDeleteMutation = { __typename?: 'Mutation', Opcion_hardDelete: { __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean } };

export type OrdenesQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdenesQuery = { __typename?: 'Query', Ordenes: Array<{ __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', precio: number, courseTitle: string, descuento?: number | null, cursoId: string }> }> };

export type Ordenes_CreateMutationVariables = Exact<{
  arrayCursosIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type Ordenes_CreateMutation = { __typename?: 'Mutation', Ordenes_create: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type OrdenQueryVariables = Exact<{
  ordenId: Scalars['ID']['input'];
}>;


export type OrdenQuery = { __typename?: 'Query', Orden: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_FindAllByUsuarioIdQueryVariables = Exact<{
  idUsuario: Scalars['ID']['input'];
}>;


export type Ordenes_FindAllByUsuarioIdQuery = { __typename?: 'Query', Ordenes_findAllByUsuarioId: Array<{ __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> }> };

export type Ordenes_FindAllByCursoIdQueryVariables = Exact<{
  idCurso: Scalars['ID']['input'];
}>;


export type Ordenes_FindAllByCursoIdQuery = { __typename?: 'Query', Ordenes_findAllByCursoId: Array<{ __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> }> };

export type Ordenes_UpdateMutationVariables = Exact<{
  ordenesUpdateId: Scalars['ID']['input'];
  updateCategoriaInput: UpdateOrdenInput;
  updateOrdenInput: UpdateOrdenInput;
}>;


export type Ordenes_UpdateMutation = { __typename?: 'Mutation', Ordenes_update: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type Ordenes_FindSoftDeletedQuery = { __typename?: 'Query', Ordenes_findSoftDeleted: Array<{ __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> }> };

export type Ordenes_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Ordenes_SoftDeleteMutation = { __typename?: 'Mutation', Ordenes_softDelete: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_RestoreMutationVariables = Exact<{
  idRestore: Scalars['ID']['input'];
}>;


export type Ordenes_RestoreMutation = { __typename?: 'Mutation', Ordenes_restore: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_HardDeleteMutationVariables = Exact<{
  ordenesHardDeleteId: Scalars['ID']['input'];
}>;


export type Ordenes_HardDeleteMutation = { __typename?: 'Mutation', Ordenes_hardDelete: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Ordenes_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Ordenes_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Ordenes_PullCursoMutationVariables = Exact<{
  ordenId: Scalars['ID']['input'];
  arrayCursosIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type Ordenes_PullCursoMutation = { __typename?: 'Mutation', Ordenes_pullCurso: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Ordenes_PushCursoMutationVariables = Exact<{
  ordenId: Scalars['ID']['input'];
  arrayCursosIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type Ordenes_PushCursoMutation = { __typename?: 'Mutation', Ordenes_pushCurso: { __typename?: 'Orden', _id: string, usuarioId: string, montoTotal: number, estado_orden: EstadoOrden, deleted: boolean, listaCursos: Array<{ __typename?: 'OrdenCursoItem', cursoId: string, precio: number, courseTitle: string, descuento?: number | null }> } };

export type Pregunta_UpdateMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
  updatePreguntaInput: UpdatePreguntaInput;
}>;


export type Pregunta_UpdateMutation = { __typename?: 'Mutation', Pregunta_update: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type PreguntasQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
}>;


export type PreguntasQuery = { __typename?: 'Query', Preguntas: Array<{ __typename?: 'Pregunta', enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, _id: string, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> };

export type Pregunta_SoftDeleteMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type Pregunta_SoftDeleteMutation = { __typename?: 'Mutation', Pregunta_softDelete: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type Pregunta_RestoreMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type Pregunta_RestoreMutation = { __typename?: 'Mutation', Pregunta_restore: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type Pregunta_HardDeleteAllSoftDeletedMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
}>;


export type Pregunta_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Pregunta_hardDeleteAllSoftDeleted: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> };

export type Pregunta_HardDeleteMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type Pregunta_HardDeleteMutation = { __typename?: 'Mutation', Pregunta_hardDelete: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type Pregunta_CreateMutationVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  createPreguntaInput: CreatePreguntaInput;
}>;


export type Pregunta_CreateMutation = { __typename?: 'Mutation', Pregunta_create: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type Pregunta_FindSoftDeletedQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
}>;


export type Pregunta_FindSoftDeletedQuery = { __typename?: 'Query', Pregunta_findSoftDeleted: Array<{ __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null }> };

export type PreguntaQueryVariables = Exact<{
  idCuestionario: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type PreguntaQuery = { __typename?: 'Query', Pregunta: { __typename?: 'Pregunta', _id: string, enunciado?: string | null, tipoPregunta?: TipoPregunta | null, moduloId?: string | null, unidadId?: string | null, deleted: boolean, opciones?: Array<{ __typename?: 'Opcion', _id: string, textOpcion: string, esCorrecta: boolean, orden?: number | null, deleted: boolean }> | null } };

export type RespuestaCuestionario_CreateMutationVariables = Exact<{
  createRespuestaCuestionarioInput: CreateRespuestaCuestionarioInput;
}>;


export type RespuestaCuestionario_CreateMutation = { __typename?: 'Mutation', RespuestaCuestionario_create: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null }> | null }> | null } };

export type RespuestaCuestionariosQueryVariables = Exact<{ [key: string]: never; }>;


export type RespuestaCuestionariosQuery = { __typename?: 'Query', RespuestaCuestionarios: Array<{ __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null }> | null }> | null }> };

export type RespuestaCuestionarioQueryVariables = Exact<{
  respuestaCuestionarioId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionarioQuery = { __typename?: 'Query', RespuestaCuestionario: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, orden?: number | null, textOpcion?: string | null }> | null }> | null } };

export type RespuestaCuestionario_ByCursoIdQueryVariables = Exact<{
  cursoId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_ByCursoIdQuery = { __typename?: 'Query', RespuestaCuestionario_byCursoId: Array<{ __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null }> };

export type RespuestaCuestionario_ByUsuarioIdQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_ByUsuarioIdQuery = { __typename?: 'Query', RespuestaCuestionario_byUsuarioId: Array<{ __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null }> };

export type RespuestaCuestionario_FindSoftDeletedQueryVariables = Exact<{ [key: string]: never; }>;


export type RespuestaCuestionario_FindSoftDeletedQuery = { __typename?: 'Query', RespuestaCuestionario_findSoftDeleted: Array<{ __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null }> };

export type RespuestaCuestionario_SoftDeleteMutationVariables = Exact<{
  respuestaCuestionarioId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_SoftDeleteMutation = { __typename?: 'Mutation', RespuestaCuestionario_softDelete: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null } };

export type RespuestaCuestionario_RestoreMutationVariables = Exact<{
  respuestaCuestionarioId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_RestoreMutation = { __typename?: 'Mutation', RespuestaCuestionario_restore: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null } };

export type RespuestaCuestionario_UpdateMutationVariables = Exact<{
  updateCuestionarioInput: UpdateRespuestaCuestionarioInput;
  respuestaCuestionarioUpdateId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_UpdateMutation = { __typename?: 'Mutation', RespuestaCuestionario_update: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null } };

export type RespuestaCuestionario_HardDeleteMutationVariables = Exact<{
  respuestaCuestionarioId: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_HardDeleteMutation = { __typename?: 'Mutation', RespuestaCuestionario_hardDelete: { __typename?: 'RespuestaCuestionario', _id: string, usuarioId: string, cursoId: string, cuestionarioId: string, fecha: any, nota?: number | null, estado: EstadoCuestionario, deleted: boolean, respuestas?: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> | null } };

export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', RespuestaCuestionario_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type RespuestaCuestionario_CalcularNotaMutationVariables = Exact<{
  idRespuestaCuestionario: Scalars['ID']['input'];
}>;


export type RespuestaCuestionario_CalcularNotaMutation = { __typename?: 'Mutation', RespuestaCuestionario_calcularNota: number };

export type RespuestaPregunta_CreateMutationVariables = Exact<{
  idCurso: Scalars['ID']['input'];
  createRespuestaPreguntaResolverInput: CreateRespuestaPregunta_ResolverInput;
}>;


export type RespuestaPregunta_CreateMutation = { __typename?: 'Mutation', RespuestaPregunta_create: { __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null } };

export type RespuestaPreguntaQueryVariables = Exact<{
  idCurso: Scalars['ID']['input'];
  idPregunta: Scalars['ID']['input'];
}>;


export type RespuestaPreguntaQuery = { __typename?: 'Query', RespuestaPregunta: { __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null } };

export type RespuestaPreguntasQueryVariables = Exact<{
  idRespuestaCuestionario: Scalars['ID']['input'];
}>;


export type RespuestaPreguntasQuery = { __typename?: 'Query', RespuestaPreguntas: Array<{ __typename?: 'RespuestaPregunta', _id: string, preguntaId: string, respuestaAbierta?: string | null, deleted: boolean, respuestaId?: Array<{ __typename?: 'RespuestaData', _id?: string | null, textOpcion?: string | null, orden?: number | null }> | null }> };

export type Unidad_CreateMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  createUnidadInput: CreateUnidadInput;
}>;


export type Unidad_CreateMutation = { __typename?: 'Mutation', Unidad_create: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type UnidadesQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
}>;


export type UnidadesQuery = { __typename?: 'Query', Unidades: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> };

export type UnidadQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type UnidadQuery = { __typename?: 'Query', Unidad: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type Unidad_UpdateMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
  updateUnidadInput: UpdateUnidadInput;
}>;


export type Unidad_UpdateMutation = { __typename?: 'Mutation', Unidad_update: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type Unidad_SoftDeleteMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type Unidad_SoftDeleteMutation = { __typename?: 'Mutation', Unidad_softDelete: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type Unidad_HardDeleteMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type Unidad_HardDeleteMutation = { __typename?: 'Mutation', Unidad_hardDelete: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type Unidad_FindSoftDeletedQueryVariables = Exact<{
  idModulo: Scalars['ID']['input'];
}>;


export type Unidad_FindSoftDeletedQuery = { __typename?: 'Query', Unidad_findSoftDeleted: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> };

export type Unidad_HardDeleteAllSoftDeletedMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
}>;


export type Unidad_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', Unidad_hardDeleteAllSoftDeleted: Array<{ __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null }> };

export type Unidad_RestoreMutationVariables = Exact<{
  idModulo: Scalars['ID']['input'];
  idUnidad: Scalars['ID']['input'];
}>;


export type Unidad_RestoreMutation = { __typename?: 'Mutation', Unidad_restore: { __typename?: 'Unidad', _id: string, moduloId: string, numeroUnidad: number, unidadTitle: string, descripcion?: string | null, urlVideo?: string | null, deleted: boolean, materiales?: Array<{ __typename?: 'Material', _id: string, materialTitle: string, descripcion?: string | null, url: string }> | null } };

export type Usuarios_FindAllByFirstnameQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type Usuarios_FindAllByFirstnameQuery = { __typename?: 'Query', usuarios_findAllByFirstname: Array<{ __typename?: 'UsuarioOutput', status: UserStatus, roles: Array<RolEnumGql>, email: string, email_verified: boolean, deleted: boolean, _id: string, lastName?: string | null, firstName?: string | null }> };

export type UsuarioQueryVariables = Exact<{
  usuarioId: Scalars['ID']['input'];
}>;


export type UsuarioQuery = { __typename?: 'Query', usuario: { __typename?: 'UsuarioOutput', roles: Array<RolEnumGql>, status: UserStatus, email_verified: boolean, email: string, deleted: boolean, _id: string, firstName?: string | null, lastName?: string | null } };

export type Usuarios_HardDeleteAllSoftDeletedMutationVariables = Exact<{ [key: string]: never; }>;


export type Usuarios_HardDeleteAllSoftDeletedMutation = { __typename?: 'Mutation', usuarios_hardDeleteAllSoftDeleted: { __typename?: 'DeletedCountOutput', deletedCount: number } };

export type Usuario_SoftDeleteMutationVariables = Exact<{
  idRemove: Scalars['ID']['input'];
}>;


export type Usuario_SoftDeleteMutation = { __typename?: 'Mutation', usuario_softDelete: { __typename?: 'UsuarioOutput', status: UserStatus, roles: Array<RolEnumGql>, deleted: boolean, email: string, _id: string } };

export type Usuario_FindByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Usuario_FindByEmailQuery = { __typename?: 'Query', usuario_findByEmail: { __typename?: 'UsuarioOutput', _id: string, email: string, email_verified: boolean, isGoogleAuth: boolean, roles: Array<RolEnumGql>, status: UserStatus } };

export type Jwt_RequestPasswordResetMutationVariables = Exact<{
  requestPasswordResetInput: RequestPasswordResetInput;
}>;


export type Jwt_RequestPasswordResetMutation = { __typename?: 'Mutation', jwt_requestPasswordReset: string };

export type Jwt_ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type Jwt_ResetPasswordMutation = { __typename?: 'Mutation', jwt_resetPassword: string };

export type Jwt_SendVerificationEmailMutationVariables = Exact<{ [key: string]: never; }>;


export type Jwt_SendVerificationEmailMutation = { __typename?: 'Mutation', jwt_sendVerificationEmail: { __typename?: 'UserJwtOutput', accessToken: string, user: { __typename?: 'UserRequest', _id: string, roles: Array<RolEnumGql>, iat?: number | null, exp?: number | null, email: string, email_verified: boolean, firstName: string, lastName: string, picture?: string | null } } };

export type Jwt_UpdatePasswordMutationVariables = Exact<{
  updatePasswordInput: UpdatePasswordInput;
}>;


export type Jwt_UpdatePasswordMutation = { __typename?: 'Mutation', jwt_updatePassword: { __typename?: 'UsuarioOutput', _id: string, firstName?: string | null, lastName?: string | null, email: string, email_verified: boolean, isGoogleAuth: boolean, roles: Array<RolEnumGql>, picture?: string | null, notificaciones: boolean, status: UserStatus, deleted: boolean } };


export const ExampleQueryDocument = gql`
    query ExampleQuery($usuarioId: ID!) {
  usuario(id: $usuarioId) {
    _id
  }
}
    `;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useExampleQueryQuery(baseOptions: Apollo.QueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables> & ({ variables: ExampleQueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
      }
export function useExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export type ExampleQueryQueryHookResult = ReturnType<typeof useExampleQueryQuery>;
export type ExampleQueryLazyQueryHookResult = ReturnType<typeof useExampleQueryLazyQuery>;
export type ExampleQuerySuspenseQueryHookResult = ReturnType<typeof useExampleQuerySuspenseQuery>;
export type ExampleQueryQueryResult = Apollo.QueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const LoginDocument = gql`
    mutation Login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    _id
    roles
    iat
    exp
    email
    email_verified
    firstName
    lastName
    picture
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($createUsuarioInput: CreateUsuarioInput!) {
  signup(createUsuarioInput: $createUsuarioInput) {
    _id
    firstName
    lastName
    email
    email_verified
    roles
    picture
    perfil {
      _id
      bio
      ubicacion
      celular
      fechaNacimiento
      contacto
      intereses
    }
    notificaciones
    cursosFavoritos {
      _id
    }
    status
    deleted
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      createUsuarioInput: // value for 'createUsuarioInput'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const Calificacion_CreateDocument = gql`
    mutation Calificacion_create($createCalificacionInput: CreateCalificacion_userInput!) {
  Calificacion_create(createCalificacionInput: $createCalificacionInput) {
    valor
    fecha
    comentario
    _id
    cursoId
    usuarioId
  }
}
    `;
export type Calificacion_CreateMutationFn = Apollo.MutationFunction<Calificacion_CreateMutation, Calificacion_CreateMutationVariables>;

/**
 * __useCalificacion_CreateMutation__
 *
 * To run a mutation, you first call `useCalificacion_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionCreateMutation, { data, loading, error }] = useCalificacion_CreateMutation({
 *   variables: {
 *      createCalificacionInput: // value for 'createCalificacionInput'
 *   },
 * });
 */
export function useCalificacion_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_CreateMutation, Calificacion_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_CreateMutation, Calificacion_CreateMutationVariables>(Calificacion_CreateDocument, options);
      }
export type Calificacion_CreateMutationHookResult = ReturnType<typeof useCalificacion_CreateMutation>;
export type Calificacion_CreateMutationResult = Apollo.MutationResult<Calificacion_CreateMutation>;
export type Calificacion_CreateMutationOptions = Apollo.BaseMutationOptions<Calificacion_CreateMutation, Calificacion_CreateMutationVariables>;
export const CalificacionesDocument = gql`
    query Calificaciones {
  Calificaciones {
    _id
    comentario
    valor
    fecha
    cursoId
    usuarioId
  }
}
    `;

/**
 * __useCalificacionesQuery__
 *
 * To run a query within a React component, call `useCalificacionesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalificacionesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalificacionesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCalificacionesQuery(baseOptions?: Apollo.QueryHookOptions<CalificacionesQuery, CalificacionesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalificacionesQuery, CalificacionesQueryVariables>(CalificacionesDocument, options);
      }
export function useCalificacionesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalificacionesQuery, CalificacionesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalificacionesQuery, CalificacionesQueryVariables>(CalificacionesDocument, options);
        }
export function useCalificacionesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CalificacionesQuery, CalificacionesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CalificacionesQuery, CalificacionesQueryVariables>(CalificacionesDocument, options);
        }
export type CalificacionesQueryHookResult = ReturnType<typeof useCalificacionesQuery>;
export type CalificacionesLazyQueryHookResult = ReturnType<typeof useCalificacionesLazyQuery>;
export type CalificacionesSuspenseQueryHookResult = ReturnType<typeof useCalificacionesSuspenseQuery>;
export type CalificacionesQueryResult = Apollo.QueryResult<CalificacionesQuery, CalificacionesQueryVariables>;
export const Calificaciones_PorUsuarioDocument = gql`
    query Calificaciones_PorUsuario($usuarioId: ID!) {
  Calificaciones_PorUsuario(usuarioId: $usuarioId) {
    valor
    usuarioId
    cursoId
    comentario
    fecha
    _id
    deleted
  }
}
    `;

/**
 * __useCalificaciones_PorUsuarioQuery__
 *
 * To run a query within a React component, call `useCalificaciones_PorUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalificaciones_PorUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalificaciones_PorUsuarioQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useCalificaciones_PorUsuarioQuery(baseOptions: Apollo.QueryHookOptions<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables> & ({ variables: Calificaciones_PorUsuarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>(Calificaciones_PorUsuarioDocument, options);
      }
export function useCalificaciones_PorUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>(Calificaciones_PorUsuarioDocument, options);
        }
export function useCalificaciones_PorUsuarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>(Calificaciones_PorUsuarioDocument, options);
        }
export type Calificaciones_PorUsuarioQueryHookResult = ReturnType<typeof useCalificaciones_PorUsuarioQuery>;
export type Calificaciones_PorUsuarioLazyQueryHookResult = ReturnType<typeof useCalificaciones_PorUsuarioLazyQuery>;
export type Calificaciones_PorUsuarioSuspenseQueryHookResult = ReturnType<typeof useCalificaciones_PorUsuarioSuspenseQuery>;
export type Calificaciones_PorUsuarioQueryResult = Apollo.QueryResult<Calificaciones_PorUsuarioQuery, Calificaciones_PorUsuarioQueryVariables>;
export const Calificaciones_PorCursoDocument = gql`
    query Calificaciones_PorCurso($cursoId: ID!) {
  Calificaciones_PorCurso(cursoId: $cursoId) {
    valor
    usuarioId
    fecha
    cursoId
    comentario
    _id
  }
}
    `;

/**
 * __useCalificaciones_PorCursoQuery__
 *
 * To run a query within a React component, call `useCalificaciones_PorCursoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalificaciones_PorCursoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalificaciones_PorCursoQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useCalificaciones_PorCursoQuery(baseOptions: Apollo.QueryHookOptions<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables> & ({ variables: Calificaciones_PorCursoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>(Calificaciones_PorCursoDocument, options);
      }
export function useCalificaciones_PorCursoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>(Calificaciones_PorCursoDocument, options);
        }
export function useCalificaciones_PorCursoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>(Calificaciones_PorCursoDocument, options);
        }
export type Calificaciones_PorCursoQueryHookResult = ReturnType<typeof useCalificaciones_PorCursoQuery>;
export type Calificaciones_PorCursoLazyQueryHookResult = ReturnType<typeof useCalificaciones_PorCursoLazyQuery>;
export type Calificaciones_PorCursoSuspenseQueryHookResult = ReturnType<typeof useCalificaciones_PorCursoSuspenseQuery>;
export type Calificaciones_PorCursoQueryResult = Apollo.QueryResult<Calificaciones_PorCursoQuery, Calificaciones_PorCursoQueryVariables>;
export const CalificacionDocument = gql`
    query Calificacion($calificacionId: ID!) {
  Calificacion(id: $calificacionId) {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useCalificacionQuery__
 *
 * To run a query within a React component, call `useCalificacionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalificacionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalificacionQuery({
 *   variables: {
 *      calificacionId: // value for 'calificacionId'
 *   },
 * });
 */
export function useCalificacionQuery(baseOptions: Apollo.QueryHookOptions<CalificacionQuery, CalificacionQueryVariables> & ({ variables: CalificacionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalificacionQuery, CalificacionQueryVariables>(CalificacionDocument, options);
      }
export function useCalificacionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalificacionQuery, CalificacionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalificacionQuery, CalificacionQueryVariables>(CalificacionDocument, options);
        }
export function useCalificacionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CalificacionQuery, CalificacionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CalificacionQuery, CalificacionQueryVariables>(CalificacionDocument, options);
        }
export type CalificacionQueryHookResult = ReturnType<typeof useCalificacionQuery>;
export type CalificacionLazyQueryHookResult = ReturnType<typeof useCalificacionLazyQuery>;
export type CalificacionSuspenseQueryHookResult = ReturnType<typeof useCalificacionSuspenseQuery>;
export type CalificacionQueryResult = Apollo.QueryResult<CalificacionQuery, CalificacionQueryVariables>;
export const QueryDocument = gql`
    query Query($cursoId: ID!) {
  Calificacion_promedioCalificaciones(cursoId: $cursoId)
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useQueryQuery(baseOptions: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables> & ({ variables: QueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export function useQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const Calificacion_FindSoftDeletedDocument = gql`
    query Calificacion_findSoftDeleted {
  Calificacion_findSoftDeleted {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useCalificacion_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useCalificacion_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalificacion_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCalificacion_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>(Calificacion_FindSoftDeletedDocument, options);
      }
export function useCalificacion_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>(Calificacion_FindSoftDeletedDocument, options);
        }
export function useCalificacion_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>(Calificacion_FindSoftDeletedDocument, options);
        }
export type Calificacion_FindSoftDeletedQueryHookResult = ReturnType<typeof useCalificacion_FindSoftDeletedQuery>;
export type Calificacion_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useCalificacion_FindSoftDeletedLazyQuery>;
export type Calificacion_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useCalificacion_FindSoftDeletedSuspenseQuery>;
export type Calificacion_FindSoftDeletedQueryResult = Apollo.QueryResult<Calificacion_FindSoftDeletedQuery, Calificacion_FindSoftDeletedQueryVariables>;
export const Calificacion_UpdateDocument = gql`
    mutation Calificacion_update($calificacionUpdateId: ID!, $updateCalificacionInput: UpdateCalificacionInput!) {
  Calificacion_update(
    id: $calificacionUpdateId
    updateCalificacionInput: $updateCalificacionInput
  ) {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;
export type Calificacion_UpdateMutationFn = Apollo.MutationFunction<Calificacion_UpdateMutation, Calificacion_UpdateMutationVariables>;

/**
 * __useCalificacion_UpdateMutation__
 *
 * To run a mutation, you first call `useCalificacion_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionUpdateMutation, { data, loading, error }] = useCalificacion_UpdateMutation({
 *   variables: {
 *      calificacionUpdateId: // value for 'calificacionUpdateId'
 *      updateCalificacionInput: // value for 'updateCalificacionInput'
 *   },
 * });
 */
export function useCalificacion_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_UpdateMutation, Calificacion_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_UpdateMutation, Calificacion_UpdateMutationVariables>(Calificacion_UpdateDocument, options);
      }
export type Calificacion_UpdateMutationHookResult = ReturnType<typeof useCalificacion_UpdateMutation>;
export type Calificacion_UpdateMutationResult = Apollo.MutationResult<Calificacion_UpdateMutation>;
export type Calificacion_UpdateMutationOptions = Apollo.BaseMutationOptions<Calificacion_UpdateMutation, Calificacion_UpdateMutationVariables>;
export const Calificacion_SoftDeleteDocument = gql`
    mutation Calificacion_softDelete($idRemove: ID!) {
  Calificacion_softDelete(idRemove: $idRemove) {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;
export type Calificacion_SoftDeleteMutationFn = Apollo.MutationFunction<Calificacion_SoftDeleteMutation, Calificacion_SoftDeleteMutationVariables>;

/**
 * __useCalificacion_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useCalificacion_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionSoftDeleteMutation, { data, loading, error }] = useCalificacion_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useCalificacion_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_SoftDeleteMutation, Calificacion_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_SoftDeleteMutation, Calificacion_SoftDeleteMutationVariables>(Calificacion_SoftDeleteDocument, options);
      }
export type Calificacion_SoftDeleteMutationHookResult = ReturnType<typeof useCalificacion_SoftDeleteMutation>;
export type Calificacion_SoftDeleteMutationResult = Apollo.MutationResult<Calificacion_SoftDeleteMutation>;
export type Calificacion_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Calificacion_SoftDeleteMutation, Calificacion_SoftDeleteMutationVariables>;
export const Calificacion_RestoreDocument = gql`
    mutation Calificacion_restore($idRestore: ID!) {
  Calificacion_restore(idRestore: $idRestore) {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;
export type Calificacion_RestoreMutationFn = Apollo.MutationFunction<Calificacion_RestoreMutation, Calificacion_RestoreMutationVariables>;

/**
 * __useCalificacion_RestoreMutation__
 *
 * To run a mutation, you first call `useCalificacion_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionRestoreMutation, { data, loading, error }] = useCalificacion_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useCalificacion_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_RestoreMutation, Calificacion_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_RestoreMutation, Calificacion_RestoreMutationVariables>(Calificacion_RestoreDocument, options);
      }
export type Calificacion_RestoreMutationHookResult = ReturnType<typeof useCalificacion_RestoreMutation>;
export type Calificacion_RestoreMutationResult = Apollo.MutationResult<Calificacion_RestoreMutation>;
export type Calificacion_RestoreMutationOptions = Apollo.BaseMutationOptions<Calificacion_RestoreMutation, Calificacion_RestoreMutationVariables>;
export const Calificacion_HardDeleteDocument = gql`
    mutation Calificacion_hardDelete($calificacionHardDeleteId: ID!) {
  Calificacion_hardDelete(id: $calificacionHardDeleteId) {
    _id
    usuarioId
    cursoId
    valor
    comentario
    fecha
    deleted
  }
}
    `;
export type Calificacion_HardDeleteMutationFn = Apollo.MutationFunction<Calificacion_HardDeleteMutation, Calificacion_HardDeleteMutationVariables>;

/**
 * __useCalificacion_HardDeleteMutation__
 *
 * To run a mutation, you first call `useCalificacion_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionHardDeleteMutation, { data, loading, error }] = useCalificacion_HardDeleteMutation({
 *   variables: {
 *      calificacionHardDeleteId: // value for 'calificacionHardDeleteId'
 *   },
 * });
 */
export function useCalificacion_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_HardDeleteMutation, Calificacion_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_HardDeleteMutation, Calificacion_HardDeleteMutationVariables>(Calificacion_HardDeleteDocument, options);
      }
export type Calificacion_HardDeleteMutationHookResult = ReturnType<typeof useCalificacion_HardDeleteMutation>;
export type Calificacion_HardDeleteMutationResult = Apollo.MutationResult<Calificacion_HardDeleteMutation>;
export type Calificacion_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Calificacion_HardDeleteMutation, Calificacion_HardDeleteMutationVariables>;
export const Calificacion_HardDeleteAllSoftDeletedDocument = gql`
    mutation Calificacion_hardDeleteAllSoftDeleted {
  Calificacion_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Calificacion_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Calificacion_HardDeleteAllSoftDeletedMutation, Calificacion_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useCalificacion_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useCalificacion_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalificacion_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calificacionHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useCalificacion_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useCalificacion_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Calificacion_HardDeleteAllSoftDeletedMutation, Calificacion_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Calificacion_HardDeleteAllSoftDeletedMutation, Calificacion_HardDeleteAllSoftDeletedMutationVariables>(Calificacion_HardDeleteAllSoftDeletedDocument, options);
      }
export type Calificacion_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useCalificacion_HardDeleteAllSoftDeletedMutation>;
export type Calificacion_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Calificacion_HardDeleteAllSoftDeletedMutation>;
export type Calificacion_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Calificacion_HardDeleteAllSoftDeletedMutation, Calificacion_HardDeleteAllSoftDeletedMutationVariables>;
export const Categorias_CreateDocument = gql`
    mutation Categorias_create($createCategoriaInput: CreateCategoriaInput!) {
  Categorias_create(createCategoriaInput: $createCategoriaInput) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;
export type Categorias_CreateMutationFn = Apollo.MutationFunction<Categorias_CreateMutation, Categorias_CreateMutationVariables>;

/**
 * __useCategorias_CreateMutation__
 *
 * To run a mutation, you first call `useCategorias_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasCreateMutation, { data, loading, error }] = useCategorias_CreateMutation({
 *   variables: {
 *      createCategoriaInput: // value for 'createCategoriaInput'
 *   },
 * });
 */
export function useCategorias_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_CreateMutation, Categorias_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_CreateMutation, Categorias_CreateMutationVariables>(Categorias_CreateDocument, options);
      }
export type Categorias_CreateMutationHookResult = ReturnType<typeof useCategorias_CreateMutation>;
export type Categorias_CreateMutationResult = Apollo.MutationResult<Categorias_CreateMutation>;
export type Categorias_CreateMutationOptions = Apollo.BaseMutationOptions<Categorias_CreateMutation, Categorias_CreateMutationVariables>;
export const CategoriasDocument = gql`
    query Categorias {
  Categorias {
    _id
    descripcion
    deleted
    nombreCategoria
  }
}
    `;

/**
 * __useCategoriasQuery__
 *
 * To run a query within a React component, call `useCategoriasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriasQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriasQuery(baseOptions?: Apollo.QueryHookOptions<CategoriasQuery, CategoriasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriasQuery, CategoriasQueryVariables>(CategoriasDocument, options);
      }
export function useCategoriasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriasQuery, CategoriasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriasQuery, CategoriasQueryVariables>(CategoriasDocument, options);
        }
export function useCategoriasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoriasQuery, CategoriasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriasQuery, CategoriasQueryVariables>(CategoriasDocument, options);
        }
export type CategoriasQueryHookResult = ReturnType<typeof useCategoriasQuery>;
export type CategoriasLazyQueryHookResult = ReturnType<typeof useCategoriasLazyQuery>;
export type CategoriasSuspenseQueryHookResult = ReturnType<typeof useCategoriasSuspenseQuery>;
export type CategoriasQueryResult = Apollo.QueryResult<CategoriasQuery, CategoriasQueryVariables>;
export const CategoriaDocument = gql`
    query Categoria($categoriaId: ID!) {
  Categoria(id: $categoriaId) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;

/**
 * __useCategoriaQuery__
 *
 * To run a query within a React component, call `useCategoriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriaQuery({
 *   variables: {
 *      categoriaId: // value for 'categoriaId'
 *   },
 * });
 */
export function useCategoriaQuery(baseOptions: Apollo.QueryHookOptions<CategoriaQuery, CategoriaQueryVariables> & ({ variables: CategoriaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriaQuery, CategoriaQueryVariables>(CategoriaDocument, options);
      }
export function useCategoriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriaQuery, CategoriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriaQuery, CategoriaQueryVariables>(CategoriaDocument, options);
        }
export function useCategoriaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoriaQuery, CategoriaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriaQuery, CategoriaQueryVariables>(CategoriaDocument, options);
        }
export type CategoriaQueryHookResult = ReturnType<typeof useCategoriaQuery>;
export type CategoriaLazyQueryHookResult = ReturnType<typeof useCategoriaLazyQuery>;
export type CategoriaSuspenseQueryHookResult = ReturnType<typeof useCategoriaSuspenseQuery>;
export type CategoriaQueryResult = Apollo.QueryResult<CategoriaQuery, CategoriaQueryVariables>;
export const Categorias_SoftDeleteDocument = gql`
    mutation Categorias_softDelete($idRemove: ID!) {
  Categorias_softDelete(idRemove: $idRemove) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;
export type Categorias_SoftDeleteMutationFn = Apollo.MutationFunction<Categorias_SoftDeleteMutation, Categorias_SoftDeleteMutationVariables>;

/**
 * __useCategorias_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useCategorias_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasSoftDeleteMutation, { data, loading, error }] = useCategorias_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useCategorias_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_SoftDeleteMutation, Categorias_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_SoftDeleteMutation, Categorias_SoftDeleteMutationVariables>(Categorias_SoftDeleteDocument, options);
      }
export type Categorias_SoftDeleteMutationHookResult = ReturnType<typeof useCategorias_SoftDeleteMutation>;
export type Categorias_SoftDeleteMutationResult = Apollo.MutationResult<Categorias_SoftDeleteMutation>;
export type Categorias_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Categorias_SoftDeleteMutation, Categorias_SoftDeleteMutationVariables>;
export const Categorias_HardDeleteDocument = gql`
    mutation Categorias_hardDelete($categoriasHardDeleteId: ID!) {
  Categorias_hardDelete(id: $categoriasHardDeleteId) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;
export type Categorias_HardDeleteMutationFn = Apollo.MutationFunction<Categorias_HardDeleteMutation, Categorias_HardDeleteMutationVariables>;

/**
 * __useCategorias_HardDeleteMutation__
 *
 * To run a mutation, you first call `useCategorias_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasHardDeleteMutation, { data, loading, error }] = useCategorias_HardDeleteMutation({
 *   variables: {
 *      categoriasHardDeleteId: // value for 'categoriasHardDeleteId'
 *   },
 * });
 */
export function useCategorias_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_HardDeleteMutation, Categorias_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_HardDeleteMutation, Categorias_HardDeleteMutationVariables>(Categorias_HardDeleteDocument, options);
      }
export type Categorias_HardDeleteMutationHookResult = ReturnType<typeof useCategorias_HardDeleteMutation>;
export type Categorias_HardDeleteMutationResult = Apollo.MutationResult<Categorias_HardDeleteMutation>;
export type Categorias_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Categorias_HardDeleteMutation, Categorias_HardDeleteMutationVariables>;
export const Categorias_HardDeleteAllSoftDeletedDocument = gql`
    mutation Categorias_hardDeleteAllSoftDeleted {
  Categorias_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Categorias_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Categorias_HardDeleteAllSoftDeletedMutation, Categorias_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useCategorias_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useCategorias_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useCategorias_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useCategorias_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_HardDeleteAllSoftDeletedMutation, Categorias_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_HardDeleteAllSoftDeletedMutation, Categorias_HardDeleteAllSoftDeletedMutationVariables>(Categorias_HardDeleteAllSoftDeletedDocument, options);
      }
export type Categorias_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useCategorias_HardDeleteAllSoftDeletedMutation>;
export type Categorias_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Categorias_HardDeleteAllSoftDeletedMutation>;
export type Categorias_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Categorias_HardDeleteAllSoftDeletedMutation, Categorias_HardDeleteAllSoftDeletedMutationVariables>;
export const Categorias_FindSoftDeletedDocument = gql`
    query Categorias_findSoftDeleted {
  Categorias_findSoftDeleted {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;

/**
 * __useCategorias_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useCategorias_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategorias_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategorias_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategorias_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>(Categorias_FindSoftDeletedDocument, options);
      }
export function useCategorias_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>(Categorias_FindSoftDeletedDocument, options);
        }
export function useCategorias_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>(Categorias_FindSoftDeletedDocument, options);
        }
export type Categorias_FindSoftDeletedQueryHookResult = ReturnType<typeof useCategorias_FindSoftDeletedQuery>;
export type Categorias_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useCategorias_FindSoftDeletedLazyQuery>;
export type Categorias_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useCategorias_FindSoftDeletedSuspenseQuery>;
export type Categorias_FindSoftDeletedQueryResult = Apollo.QueryResult<Categorias_FindSoftDeletedQuery, Categorias_FindSoftDeletedQueryVariables>;
export const Categorias_RestoreDocument = gql`
    mutation Categorias_restore($idRestore: ID!) {
  Categorias_restore(idRestore: $idRestore) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;
export type Categorias_RestoreMutationFn = Apollo.MutationFunction<Categorias_RestoreMutation, Categorias_RestoreMutationVariables>;

/**
 * __useCategorias_RestoreMutation__
 *
 * To run a mutation, you first call `useCategorias_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasRestoreMutation, { data, loading, error }] = useCategorias_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useCategorias_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_RestoreMutation, Categorias_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_RestoreMutation, Categorias_RestoreMutationVariables>(Categorias_RestoreDocument, options);
      }
export type Categorias_RestoreMutationHookResult = ReturnType<typeof useCategorias_RestoreMutation>;
export type Categorias_RestoreMutationResult = Apollo.MutationResult<Categorias_RestoreMutation>;
export type Categorias_RestoreMutationOptions = Apollo.BaseMutationOptions<Categorias_RestoreMutation, Categorias_RestoreMutationVariables>;
export const Categorias_FindAllByNombreDocument = gql`
    query Categorias_findAllByNombre($search: String) {
  Categorias_findAllByNombre(search: $search) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;

/**
 * __useCategorias_FindAllByNombreQuery__
 *
 * To run a query within a React component, call `useCategorias_FindAllByNombreQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategorias_FindAllByNombreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategorias_FindAllByNombreQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useCategorias_FindAllByNombreQuery(baseOptions?: Apollo.QueryHookOptions<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>(Categorias_FindAllByNombreDocument, options);
      }
export function useCategorias_FindAllByNombreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>(Categorias_FindAllByNombreDocument, options);
        }
export function useCategorias_FindAllByNombreSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>(Categorias_FindAllByNombreDocument, options);
        }
export type Categorias_FindAllByNombreQueryHookResult = ReturnType<typeof useCategorias_FindAllByNombreQuery>;
export type Categorias_FindAllByNombreLazyQueryHookResult = ReturnType<typeof useCategorias_FindAllByNombreLazyQuery>;
export type Categorias_FindAllByNombreSuspenseQueryHookResult = ReturnType<typeof useCategorias_FindAllByNombreSuspenseQuery>;
export type Categorias_FindAllByNombreQueryResult = Apollo.QueryResult<Categorias_FindAllByNombreQuery, Categorias_FindAllByNombreQueryVariables>;
export const Categorias_UpdateDocument = gql`
    mutation Categorias_update($categoriasUpdateId: ID!, $updateCategoriaInput: UpdateCategoriaInput!) {
  Categorias_update(
    id: $categoriasUpdateId
    updateCategoriaInput: $updateCategoriaInput
  ) {
    _id
    nombreCategoria
    descripcion
    deleted
  }
}
    `;
export type Categorias_UpdateMutationFn = Apollo.MutationFunction<Categorias_UpdateMutation, Categorias_UpdateMutationVariables>;

/**
 * __useCategorias_UpdateMutation__
 *
 * To run a mutation, you first call `useCategorias_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategorias_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoriasUpdateMutation, { data, loading, error }] = useCategorias_UpdateMutation({
 *   variables: {
 *      categoriasUpdateId: // value for 'categoriasUpdateId'
 *      updateCategoriaInput: // value for 'updateCategoriaInput'
 *   },
 * });
 */
export function useCategorias_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Categorias_UpdateMutation, Categorias_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Categorias_UpdateMutation, Categorias_UpdateMutationVariables>(Categorias_UpdateDocument, options);
      }
export type Categorias_UpdateMutationHookResult = ReturnType<typeof useCategorias_UpdateMutation>;
export type Categorias_UpdateMutationResult = Apollo.MutationResult<Categorias_UpdateMutation>;
export type Categorias_UpdateMutationOptions = Apollo.BaseMutationOptions<Categorias_UpdateMutation, Categorias_UpdateMutationVariables>;
export const Comentario_UpdateDocument = gql`
    mutation Comentario_update($updateComentarioInput: UpdateComentarioInput!, $comentarioUpdateId: ID!) {
  Comentario_update(
    updateComentarioInput: $updateComentarioInput
    id: $comentarioUpdateId
  ) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;
export type Comentario_UpdateMutationFn = Apollo.MutationFunction<Comentario_UpdateMutation, Comentario_UpdateMutationVariables>;

/**
 * __useComentario_UpdateMutation__
 *
 * To run a mutation, you first call `useComentario_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioUpdateMutation, { data, loading, error }] = useComentario_UpdateMutation({
 *   variables: {
 *      updateComentarioInput: // value for 'updateComentarioInput'
 *      comentarioUpdateId: // value for 'comentarioUpdateId'
 *   },
 * });
 */
export function useComentario_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_UpdateMutation, Comentario_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_UpdateMutation, Comentario_UpdateMutationVariables>(Comentario_UpdateDocument, options);
      }
export type Comentario_UpdateMutationHookResult = ReturnType<typeof useComentario_UpdateMutation>;
export type Comentario_UpdateMutationResult = Apollo.MutationResult<Comentario_UpdateMutation>;
export type Comentario_UpdateMutationOptions = Apollo.BaseMutationOptions<Comentario_UpdateMutation, Comentario_UpdateMutationVariables>;
export const Comentario_RestoreDocument = gql`
    mutation Comentario_restore($idRestore: ID!) {
  Comentario_restore(idRestore: $idRestore) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;
export type Comentario_RestoreMutationFn = Apollo.MutationFunction<Comentario_RestoreMutation, Comentario_RestoreMutationVariables>;

/**
 * __useComentario_RestoreMutation__
 *
 * To run a mutation, you first call `useComentario_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioRestoreMutation, { data, loading, error }] = useComentario_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useComentario_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_RestoreMutation, Comentario_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_RestoreMutation, Comentario_RestoreMutationVariables>(Comentario_RestoreDocument, options);
      }
export type Comentario_RestoreMutationHookResult = ReturnType<typeof useComentario_RestoreMutation>;
export type Comentario_RestoreMutationResult = Apollo.MutationResult<Comentario_RestoreMutation>;
export type Comentario_RestoreMutationOptions = Apollo.BaseMutationOptions<Comentario_RestoreMutation, Comentario_RestoreMutationVariables>;
export const Comentario_HardDeleteDocument = gql`
    mutation Comentario_hardDelete($comentarioHardDeleteId: ID!) {
  Comentario_hardDelete(id: $comentarioHardDeleteId) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;
export type Comentario_HardDeleteMutationFn = Apollo.MutationFunction<Comentario_HardDeleteMutation, Comentario_HardDeleteMutationVariables>;

/**
 * __useComentario_HardDeleteMutation__
 *
 * To run a mutation, you first call `useComentario_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioHardDeleteMutation, { data, loading, error }] = useComentario_HardDeleteMutation({
 *   variables: {
 *      comentarioHardDeleteId: // value for 'comentarioHardDeleteId'
 *   },
 * });
 */
export function useComentario_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_HardDeleteMutation, Comentario_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_HardDeleteMutation, Comentario_HardDeleteMutationVariables>(Comentario_HardDeleteDocument, options);
      }
export type Comentario_HardDeleteMutationHookResult = ReturnType<typeof useComentario_HardDeleteMutation>;
export type Comentario_HardDeleteMutationResult = Apollo.MutationResult<Comentario_HardDeleteMutation>;
export type Comentario_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Comentario_HardDeleteMutation, Comentario_HardDeleteMutationVariables>;
export const Comentarios_PorCursoDocument = gql`
    query Comentarios_PorCurso($cursoId: ID!) {
  Comentarios_PorCurso(cursoId: $cursoId) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useComentarios_PorCursoQuery__
 *
 * To run a query within a React component, call `useComentarios_PorCursoQuery` and pass it any options that fit your needs.
 * When your component renders, `useComentarios_PorCursoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComentarios_PorCursoQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useComentarios_PorCursoQuery(baseOptions: Apollo.QueryHookOptions<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables> & ({ variables: Comentarios_PorCursoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>(Comentarios_PorCursoDocument, options);
      }
export function useComentarios_PorCursoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>(Comentarios_PorCursoDocument, options);
        }
export function useComentarios_PorCursoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>(Comentarios_PorCursoDocument, options);
        }
export type Comentarios_PorCursoQueryHookResult = ReturnType<typeof useComentarios_PorCursoQuery>;
export type Comentarios_PorCursoLazyQueryHookResult = ReturnType<typeof useComentarios_PorCursoLazyQuery>;
export type Comentarios_PorCursoSuspenseQueryHookResult = ReturnType<typeof useComentarios_PorCursoSuspenseQuery>;
export type Comentarios_PorCursoQueryResult = Apollo.QueryResult<Comentarios_PorCursoQuery, Comentarios_PorCursoQueryVariables>;
export const Comentario_SoftDeleteDocument = gql`
    mutation Comentario_softDelete($idRemove: ID!) {
  Comentario_softDelete(idRemove: $idRemove) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;
export type Comentario_SoftDeleteMutationFn = Apollo.MutationFunction<Comentario_SoftDeleteMutation, Comentario_SoftDeleteMutationVariables>;

/**
 * __useComentario_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useComentario_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioSoftDeleteMutation, { data, loading, error }] = useComentario_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useComentario_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_SoftDeleteMutation, Comentario_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_SoftDeleteMutation, Comentario_SoftDeleteMutationVariables>(Comentario_SoftDeleteDocument, options);
      }
export type Comentario_SoftDeleteMutationHookResult = ReturnType<typeof useComentario_SoftDeleteMutation>;
export type Comentario_SoftDeleteMutationResult = Apollo.MutationResult<Comentario_SoftDeleteMutation>;
export type Comentario_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Comentario_SoftDeleteMutation, Comentario_SoftDeleteMutationVariables>;
export const Comentarios_PorUsuarioDocument = gql`
    query Comentarios_PorUsuario($usuarioId: ID!) {
  Comentarios_PorUsuario(usuarioId: $usuarioId) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useComentarios_PorUsuarioQuery__
 *
 * To run a query within a React component, call `useComentarios_PorUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useComentarios_PorUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComentarios_PorUsuarioQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useComentarios_PorUsuarioQuery(baseOptions: Apollo.QueryHookOptions<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables> & ({ variables: Comentarios_PorUsuarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>(Comentarios_PorUsuarioDocument, options);
      }
export function useComentarios_PorUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>(Comentarios_PorUsuarioDocument, options);
        }
export function useComentarios_PorUsuarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>(Comentarios_PorUsuarioDocument, options);
        }
export type Comentarios_PorUsuarioQueryHookResult = ReturnType<typeof useComentarios_PorUsuarioQuery>;
export type Comentarios_PorUsuarioLazyQueryHookResult = ReturnType<typeof useComentarios_PorUsuarioLazyQuery>;
export type Comentarios_PorUsuarioSuspenseQueryHookResult = ReturnType<typeof useComentarios_PorUsuarioSuspenseQuery>;
export type Comentarios_PorUsuarioQueryResult = Apollo.QueryResult<Comentarios_PorUsuarioQuery, Comentarios_PorUsuarioQueryVariables>;
export const Comentario_FindSoftDeletedDocument = gql`
    query Comentario_findSoftDeleted {
  Comentario_findSoftDeleted {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useComentario_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useComentario_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useComentario_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComentario_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useComentario_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>(Comentario_FindSoftDeletedDocument, options);
      }
export function useComentario_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>(Comentario_FindSoftDeletedDocument, options);
        }
export function useComentario_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>(Comentario_FindSoftDeletedDocument, options);
        }
export type Comentario_FindSoftDeletedQueryHookResult = ReturnType<typeof useComentario_FindSoftDeletedQuery>;
export type Comentario_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useComentario_FindSoftDeletedLazyQuery>;
export type Comentario_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useComentario_FindSoftDeletedSuspenseQuery>;
export type Comentario_FindSoftDeletedQueryResult = Apollo.QueryResult<Comentario_FindSoftDeletedQuery, Comentario_FindSoftDeletedQueryVariables>;
export const ComentariosDocument = gql`
    query Comentarios($limit: Int) {
  Comentarios(limit: $limit) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useComentariosQuery__
 *
 * To run a query within a React component, call `useComentariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useComentariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComentariosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useComentariosQuery(baseOptions?: Apollo.QueryHookOptions<ComentariosQuery, ComentariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComentariosQuery, ComentariosQueryVariables>(ComentariosDocument, options);
      }
export function useComentariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComentariosQuery, ComentariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComentariosQuery, ComentariosQueryVariables>(ComentariosDocument, options);
        }
export function useComentariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ComentariosQuery, ComentariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ComentariosQuery, ComentariosQueryVariables>(ComentariosDocument, options);
        }
export type ComentariosQueryHookResult = ReturnType<typeof useComentariosQuery>;
export type ComentariosLazyQueryHookResult = ReturnType<typeof useComentariosLazyQuery>;
export type ComentariosSuspenseQueryHookResult = ReturnType<typeof useComentariosSuspenseQuery>;
export type ComentariosQueryResult = Apollo.QueryResult<ComentariosQuery, ComentariosQueryVariables>;
export const ComentarioDocument = gql`
    query Comentario($comentarioId: ID!) {
  Comentario(id: $comentarioId) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;

/**
 * __useComentarioQuery__
 *
 * To run a query within a React component, call `useComentarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useComentarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComentarioQuery({
 *   variables: {
 *      comentarioId: // value for 'comentarioId'
 *   },
 * });
 */
export function useComentarioQuery(baseOptions: Apollo.QueryHookOptions<ComentarioQuery, ComentarioQueryVariables> & ({ variables: ComentarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComentarioQuery, ComentarioQueryVariables>(ComentarioDocument, options);
      }
export function useComentarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComentarioQuery, ComentarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComentarioQuery, ComentarioQueryVariables>(ComentarioDocument, options);
        }
export function useComentarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ComentarioQuery, ComentarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ComentarioQuery, ComentarioQueryVariables>(ComentarioDocument, options);
        }
export type ComentarioQueryHookResult = ReturnType<typeof useComentarioQuery>;
export type ComentarioLazyQueryHookResult = ReturnType<typeof useComentarioLazyQuery>;
export type ComentarioSuspenseQueryHookResult = ReturnType<typeof useComentarioSuspenseQuery>;
export type ComentarioQueryResult = Apollo.QueryResult<ComentarioQuery, ComentarioQueryVariables>;
export const Comentario_CreateDocument = gql`
    mutation Comentario_create($createComentarioInput: CreateComentario_userInput!) {
  Comentario_create(createComentarioInput: $createComentarioInput) {
    _id
    usuarioId
    cursoId
    comentario
    fecha
    deleted
  }
}
    `;
export type Comentario_CreateMutationFn = Apollo.MutationFunction<Comentario_CreateMutation, Comentario_CreateMutationVariables>;

/**
 * __useComentario_CreateMutation__
 *
 * To run a mutation, you first call `useComentario_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioCreateMutation, { data, loading, error }] = useComentario_CreateMutation({
 *   variables: {
 *      createComentarioInput: // value for 'createComentarioInput'
 *   },
 * });
 */
export function useComentario_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_CreateMutation, Comentario_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_CreateMutation, Comentario_CreateMutationVariables>(Comentario_CreateDocument, options);
      }
export type Comentario_CreateMutationHookResult = ReturnType<typeof useComentario_CreateMutation>;
export type Comentario_CreateMutationResult = Apollo.MutationResult<Comentario_CreateMutation>;
export type Comentario_CreateMutationOptions = Apollo.BaseMutationOptions<Comentario_CreateMutation, Comentario_CreateMutationVariables>;
export const Comentario_HardDeleteAllSoftDeletedDocument = gql`
    mutation Comentario_hardDeleteAllSoftDeleted {
  Comentario_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Comentario_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Comentario_HardDeleteAllSoftDeletedMutation, Comentario_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useComentario_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useComentario_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentario_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useComentario_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useComentario_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Comentario_HardDeleteAllSoftDeletedMutation, Comentario_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Comentario_HardDeleteAllSoftDeletedMutation, Comentario_HardDeleteAllSoftDeletedMutationVariables>(Comentario_HardDeleteAllSoftDeletedDocument, options);
      }
export type Comentario_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useComentario_HardDeleteAllSoftDeletedMutation>;
export type Comentario_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Comentario_HardDeleteAllSoftDeletedMutation>;
export type Comentario_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Comentario_HardDeleteAllSoftDeletedMutation, Comentario_HardDeleteAllSoftDeletedMutationVariables>;
export const CuestionariosDocument = gql`
    query Cuestionarios($limit: Int) {
  Cuestionarios(limit: $limit) {
    _id
    cursoId
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;

/**
 * __useCuestionariosQuery__
 *
 * To run a query within a React component, call `useCuestionariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCuestionariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCuestionariosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCuestionariosQuery(baseOptions?: Apollo.QueryHookOptions<CuestionariosQuery, CuestionariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CuestionariosQuery, CuestionariosQueryVariables>(CuestionariosDocument, options);
      }
export function useCuestionariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CuestionariosQuery, CuestionariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CuestionariosQuery, CuestionariosQueryVariables>(CuestionariosDocument, options);
        }
export function useCuestionariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CuestionariosQuery, CuestionariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CuestionariosQuery, CuestionariosQueryVariables>(CuestionariosDocument, options);
        }
export type CuestionariosQueryHookResult = ReturnType<typeof useCuestionariosQuery>;
export type CuestionariosLazyQueryHookResult = ReturnType<typeof useCuestionariosLazyQuery>;
export type CuestionariosSuspenseQueryHookResult = ReturnType<typeof useCuestionariosSuspenseQuery>;
export type CuestionariosQueryResult = Apollo.QueryResult<CuestionariosQuery, CuestionariosQueryVariables>;
export const CuestionarioDocument = gql`
    query Cuestionario($cuestionarioId: ID!) {
  Cuestionario(id: $cuestionarioId) {
    _id
    cursoId
    cuestionarioTitle
    notaMaxima
    notaMinimaAprobar
    published
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      published
      moduloId
      unidadId
      deleted
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;

/**
 * __useCuestionarioQuery__
 *
 * To run a query within a React component, call `useCuestionarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useCuestionarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCuestionarioQuery({
 *   variables: {
 *      cuestionarioId: // value for 'cuestionarioId'
 *   },
 * });
 */
export function useCuestionarioQuery(baseOptions: Apollo.QueryHookOptions<CuestionarioQuery, CuestionarioQueryVariables> & ({ variables: CuestionarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CuestionarioQuery, CuestionarioQueryVariables>(CuestionarioDocument, options);
      }
export function useCuestionarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CuestionarioQuery, CuestionarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CuestionarioQuery, CuestionarioQueryVariables>(CuestionarioDocument, options);
        }
export function useCuestionarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CuestionarioQuery, CuestionarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CuestionarioQuery, CuestionarioQueryVariables>(CuestionarioDocument, options);
        }
export type CuestionarioQueryHookResult = ReturnType<typeof useCuestionarioQuery>;
export type CuestionarioLazyQueryHookResult = ReturnType<typeof useCuestionarioLazyQuery>;
export type CuestionarioSuspenseQueryHookResult = ReturnType<typeof useCuestionarioSuspenseQuery>;
export type CuestionarioQueryResult = Apollo.QueryResult<CuestionarioQuery, CuestionarioQueryVariables>;
export const Cuestionario_UpdateDocument = gql`
    mutation Cuestionario_update($updateCuestionarioInput: UpdateCuestionarioInput!, $cuestionarioUpdateId: ID!) {
  Cuestionario_update(
    updateCuestionarioInput: $updateCuestionarioInput
    id: $cuestionarioUpdateId
  ) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;
export type Cuestionario_UpdateMutationFn = Apollo.MutationFunction<Cuestionario_UpdateMutation, Cuestionario_UpdateMutationVariables>;

/**
 * __useCuestionario_UpdateMutation__
 *
 * To run a mutation, you first call `useCuestionario_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioUpdateMutation, { data, loading, error }] = useCuestionario_UpdateMutation({
 *   variables: {
 *      updateCuestionarioInput: // value for 'updateCuestionarioInput'
 *      cuestionarioUpdateId: // value for 'cuestionarioUpdateId'
 *   },
 * });
 */
export function useCuestionario_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_UpdateMutation, Cuestionario_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_UpdateMutation, Cuestionario_UpdateMutationVariables>(Cuestionario_UpdateDocument, options);
      }
export type Cuestionario_UpdateMutationHookResult = ReturnType<typeof useCuestionario_UpdateMutation>;
export type Cuestionario_UpdateMutationResult = Apollo.MutationResult<Cuestionario_UpdateMutation>;
export type Cuestionario_UpdateMutationOptions = Apollo.BaseMutationOptions<Cuestionario_UpdateMutation, Cuestionario_UpdateMutationVariables>;
export const Cuestionario_HardDeleteDocument = gql`
    mutation Cuestionario_hardDelete($cuestionarioHardDeleteId: ID!) {
  Cuestionario_hardDelete(id: $cuestionarioHardDeleteId) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;
export type Cuestionario_HardDeleteMutationFn = Apollo.MutationFunction<Cuestionario_HardDeleteMutation, Cuestionario_HardDeleteMutationVariables>;

/**
 * __useCuestionario_HardDeleteMutation__
 *
 * To run a mutation, you first call `useCuestionario_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioHardDeleteMutation, { data, loading, error }] = useCuestionario_HardDeleteMutation({
 *   variables: {
 *      cuestionarioHardDeleteId: // value for 'cuestionarioHardDeleteId'
 *   },
 * });
 */
export function useCuestionario_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_HardDeleteMutation, Cuestionario_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_HardDeleteMutation, Cuestionario_HardDeleteMutationVariables>(Cuestionario_HardDeleteDocument, options);
      }
export type Cuestionario_HardDeleteMutationHookResult = ReturnType<typeof useCuestionario_HardDeleteMutation>;
export type Cuestionario_HardDeleteMutationResult = Apollo.MutationResult<Cuestionario_HardDeleteMutation>;
export type Cuestionario_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Cuestionario_HardDeleteMutation, Cuestionario_HardDeleteMutationVariables>;
export const Cuestionario_HardDeleteAllSoftDeletedDocument = gql`
    mutation Cuestionario_hardDeleteAllSoftDeleted {
  Cuestionario_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Cuestionario_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Cuestionario_HardDeleteAllSoftDeletedMutation, Cuestionario_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useCuestionario_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useCuestionario_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useCuestionario_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useCuestionario_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_HardDeleteAllSoftDeletedMutation, Cuestionario_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_HardDeleteAllSoftDeletedMutation, Cuestionario_HardDeleteAllSoftDeletedMutationVariables>(Cuestionario_HardDeleteAllSoftDeletedDocument, options);
      }
export type Cuestionario_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useCuestionario_HardDeleteAllSoftDeletedMutation>;
export type Cuestionario_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Cuestionario_HardDeleteAllSoftDeletedMutation>;
export type Cuestionario_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Cuestionario_HardDeleteAllSoftDeletedMutation, Cuestionario_HardDeleteAllSoftDeletedMutationVariables>;
export const Cuestionario_FindSoftDeletedDocument = gql`
    query Cuestionario_findSoftDeleted {
  Cuestionario_findSoftDeleted {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;

/**
 * __useCuestionario_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useCuestionario_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCuestionario_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCuestionario_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>(Cuestionario_FindSoftDeletedDocument, options);
      }
export function useCuestionario_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>(Cuestionario_FindSoftDeletedDocument, options);
        }
export function useCuestionario_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>(Cuestionario_FindSoftDeletedDocument, options);
        }
export type Cuestionario_FindSoftDeletedQueryHookResult = ReturnType<typeof useCuestionario_FindSoftDeletedQuery>;
export type Cuestionario_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useCuestionario_FindSoftDeletedLazyQuery>;
export type Cuestionario_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useCuestionario_FindSoftDeletedSuspenseQuery>;
export type Cuestionario_FindSoftDeletedQueryResult = Apollo.QueryResult<Cuestionario_FindSoftDeletedQuery, Cuestionario_FindSoftDeletedQueryVariables>;
export const Cuestionario_RestoreDocument = gql`
    mutation Cuestionario_restore($idRestore: ID!) {
  Cuestionario_restore(idRestore: $idRestore) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;
export type Cuestionario_RestoreMutationFn = Apollo.MutationFunction<Cuestionario_RestoreMutation, Cuestionario_RestoreMutationVariables>;

/**
 * __useCuestionario_RestoreMutation__
 *
 * To run a mutation, you first call `useCuestionario_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioRestoreMutation, { data, loading, error }] = useCuestionario_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useCuestionario_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_RestoreMutation, Cuestionario_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_RestoreMutation, Cuestionario_RestoreMutationVariables>(Cuestionario_RestoreDocument, options);
      }
export type Cuestionario_RestoreMutationHookResult = ReturnType<typeof useCuestionario_RestoreMutation>;
export type Cuestionario_RestoreMutationResult = Apollo.MutationResult<Cuestionario_RestoreMutation>;
export type Cuestionario_RestoreMutationOptions = Apollo.BaseMutationOptions<Cuestionario_RestoreMutation, Cuestionario_RestoreMutationVariables>;
export const Cuestionario_CreateDocument = gql`
    mutation Cuestionario_create($createCuestionarioInput: CreateCuestionarioInput!) {
  Cuestionario_create(createCuestionarioInput: $createCuestionarioInput) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;
export type Cuestionario_CreateMutationFn = Apollo.MutationFunction<Cuestionario_CreateMutation, Cuestionario_CreateMutationVariables>;

/**
 * __useCuestionario_CreateMutation__
 *
 * To run a mutation, you first call `useCuestionario_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioCreateMutation, { data, loading, error }] = useCuestionario_CreateMutation({
 *   variables: {
 *      createCuestionarioInput: // value for 'createCuestionarioInput'
 *   },
 * });
 */
export function useCuestionario_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_CreateMutation, Cuestionario_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_CreateMutation, Cuestionario_CreateMutationVariables>(Cuestionario_CreateDocument, options);
      }
export type Cuestionario_CreateMutationHookResult = ReturnType<typeof useCuestionario_CreateMutation>;
export type Cuestionario_CreateMutationResult = Apollo.MutationResult<Cuestionario_CreateMutation>;
export type Cuestionario_CreateMutationOptions = Apollo.BaseMutationOptions<Cuestionario_CreateMutation, Cuestionario_CreateMutationVariables>;
export const Cuestionario_SoftDeleteDocument = gql`
    mutation Cuestionario_softDelete($idRemove: ID!) {
  Cuestionario_softDelete(idRemove: $idRemove) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;
export type Cuestionario_SoftDeleteMutationFn = Apollo.MutationFunction<Cuestionario_SoftDeleteMutation, Cuestionario_SoftDeleteMutationVariables>;

/**
 * __useCuestionario_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useCuestionario_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cuestionarioSoftDeleteMutation, { data, loading, error }] = useCuestionario_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useCuestionario_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Cuestionario_SoftDeleteMutation, Cuestionario_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cuestionario_SoftDeleteMutation, Cuestionario_SoftDeleteMutationVariables>(Cuestionario_SoftDeleteDocument, options);
      }
export type Cuestionario_SoftDeleteMutationHookResult = ReturnType<typeof useCuestionario_SoftDeleteMutation>;
export type Cuestionario_SoftDeleteMutationResult = Apollo.MutationResult<Cuestionario_SoftDeleteMutation>;
export type Cuestionario_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Cuestionario_SoftDeleteMutation, Cuestionario_SoftDeleteMutationVariables>;
export const Cuestionario_FindByCursoIdDocument = gql`
    query Cuestionario_findByCursoId($cursoId: ID!) {
  Cuestionario_findByCursoId(cursoId: $cursoId) {
    _id
    cursoId
    cuestionarioTitle
    descripcion
    preguntas {
      _id
      enunciado
      tipoPregunta
      opciones {
        _id
        textOpcion
        esCorrecta
        orden
        deleted
      }
      moduloId
      unidadId
      deleted
    }
    published
    notaMaxima
    notaMinimaAprobar
    fechaCreacion
    deleted
  }
}
    `;

/**
 * __useCuestionario_FindByCursoIdQuery__
 *
 * To run a query within a React component, call `useCuestionario_FindByCursoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCuestionario_FindByCursoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCuestionario_FindByCursoIdQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useCuestionario_FindByCursoIdQuery(baseOptions: Apollo.QueryHookOptions<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables> & ({ variables: Cuestionario_FindByCursoIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>(Cuestionario_FindByCursoIdDocument, options);
      }
export function useCuestionario_FindByCursoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>(Cuestionario_FindByCursoIdDocument, options);
        }
export function useCuestionario_FindByCursoIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>(Cuestionario_FindByCursoIdDocument, options);
        }
export type Cuestionario_FindByCursoIdQueryHookResult = ReturnType<typeof useCuestionario_FindByCursoIdQuery>;
export type Cuestionario_FindByCursoIdLazyQueryHookResult = ReturnType<typeof useCuestionario_FindByCursoIdLazyQuery>;
export type Cuestionario_FindByCursoIdSuspenseQueryHookResult = ReturnType<typeof useCuestionario_FindByCursoIdSuspenseQuery>;
export type Cuestionario_FindByCursoIdQueryResult = Apollo.QueryResult<Cuestionario_FindByCursoIdQuery, Cuestionario_FindByCursoIdQueryVariables>;
export const CursoComprado_CreateDocument = gql`
    mutation CursoComprado_create($createCursoCompradoInput: CreateCursoComprado_userInput!) {
  CursoComprado_create(createCursoCompradoInput: $createCursoCompradoInput) {
    _id
    usuarioId {
      _id
      email
    }
    cursoId {
      _id
      courseTitle
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;
export type CursoComprado_CreateMutationFn = Apollo.MutationFunction<CursoComprado_CreateMutation, CursoComprado_CreateMutationVariables>;

/**
 * __useCursoComprado_CreateMutation__
 *
 * To run a mutation, you first call `useCursoComprado_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoCompradoCreateMutation, { data, loading, error }] = useCursoComprado_CreateMutation({
 *   variables: {
 *      createCursoCompradoInput: // value for 'createCursoCompradoInput'
 *   },
 * });
 */
export function useCursoComprado_CreateMutation(baseOptions?: Apollo.MutationHookOptions<CursoComprado_CreateMutation, CursoComprado_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CursoComprado_CreateMutation, CursoComprado_CreateMutationVariables>(CursoComprado_CreateDocument, options);
      }
export type CursoComprado_CreateMutationHookResult = ReturnType<typeof useCursoComprado_CreateMutation>;
export type CursoComprado_CreateMutationResult = Apollo.MutationResult<CursoComprado_CreateMutation>;
export type CursoComprado_CreateMutationOptions = Apollo.BaseMutationOptions<CursoComprado_CreateMutation, CursoComprado_CreateMutationVariables>;
export const CursoCompradoesDocument = gql`
    query CursoCompradoes {
  CursoComprados {
    _id
    usuarioId {
      _id
    }
    cursoId {
      _id
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;

/**
 * __useCursoCompradoesQuery__
 *
 * To run a query within a React component, call `useCursoCompradoesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoCompradoesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoCompradoesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCursoCompradoesQuery(baseOptions?: Apollo.QueryHookOptions<CursoCompradoesQuery, CursoCompradoesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoCompradoesQuery, CursoCompradoesQueryVariables>(CursoCompradoesDocument, options);
      }
export function useCursoCompradoesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoCompradoesQuery, CursoCompradoesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoCompradoesQuery, CursoCompradoesQueryVariables>(CursoCompradoesDocument, options);
        }
export function useCursoCompradoesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoCompradoesQuery, CursoCompradoesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoCompradoesQuery, CursoCompradoesQueryVariables>(CursoCompradoesDocument, options);
        }
export type CursoCompradoesQueryHookResult = ReturnType<typeof useCursoCompradoesQuery>;
export type CursoCompradoesLazyQueryHookResult = ReturnType<typeof useCursoCompradoesLazyQuery>;
export type CursoCompradoesSuspenseQueryHookResult = ReturnType<typeof useCursoCompradoesSuspenseQuery>;
export type CursoCompradoesQueryResult = Apollo.QueryResult<CursoCompradoesQuery, CursoCompradoesQueryVariables>;
export const CursoCompradoDocument = gql`
    query CursoComprado($cursoCompradoId: ID!) {
  CursoComprado(id: $cursoCompradoId) {
    _id
    usuarioId {
      _id
    }
    cursoId {
      _id
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;

/**
 * __useCursoCompradoQuery__
 *
 * To run a query within a React component, call `useCursoCompradoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoCompradoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoCompradoQuery({
 *   variables: {
 *      cursoCompradoId: // value for 'cursoCompradoId'
 *   },
 * });
 */
export function useCursoCompradoQuery(baseOptions: Apollo.QueryHookOptions<CursoCompradoQuery, CursoCompradoQueryVariables> & ({ variables: CursoCompradoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoCompradoQuery, CursoCompradoQueryVariables>(CursoCompradoDocument, options);
      }
export function useCursoCompradoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoCompradoQuery, CursoCompradoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoCompradoQuery, CursoCompradoQueryVariables>(CursoCompradoDocument, options);
        }
export function useCursoCompradoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoCompradoQuery, CursoCompradoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoCompradoQuery, CursoCompradoQueryVariables>(CursoCompradoDocument, options);
        }
export type CursoCompradoQueryHookResult = ReturnType<typeof useCursoCompradoQuery>;
export type CursoCompradoLazyQueryHookResult = ReturnType<typeof useCursoCompradoLazyQuery>;
export type CursoCompradoSuspenseQueryHookResult = ReturnType<typeof useCursoCompradoSuspenseQuery>;
export type CursoCompradoQueryResult = Apollo.QueryResult<CursoCompradoQuery, CursoCompradoQueryVariables>;
export const CursoComprado_SoftDeleteDocument = gql`
    mutation CursoComprado_softDelete($idRemove: ID!) {
  CursoComprado_softDelete(idRemove: $idRemove) {
    _id
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;
export type CursoComprado_SoftDeleteMutationFn = Apollo.MutationFunction<CursoComprado_SoftDeleteMutation, CursoComprado_SoftDeleteMutationVariables>;

/**
 * __useCursoComprado_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useCursoComprado_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoCompradoSoftDeleteMutation, { data, loading, error }] = useCursoComprado_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useCursoComprado_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<CursoComprado_SoftDeleteMutation, CursoComprado_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CursoComprado_SoftDeleteMutation, CursoComprado_SoftDeleteMutationVariables>(CursoComprado_SoftDeleteDocument, options);
      }
export type CursoComprado_SoftDeleteMutationHookResult = ReturnType<typeof useCursoComprado_SoftDeleteMutation>;
export type CursoComprado_SoftDeleteMutationResult = Apollo.MutationResult<CursoComprado_SoftDeleteMutation>;
export type CursoComprado_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<CursoComprado_SoftDeleteMutation, CursoComprado_SoftDeleteMutationVariables>;
export const CursoComprado_RestoreDocument = gql`
    mutation CursoComprado_restore($idRestore: ID!) {
  CursoComprado_restore(idRestore: $idRestore) {
    _id
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;
export type CursoComprado_RestoreMutationFn = Apollo.MutationFunction<CursoComprado_RestoreMutation, CursoComprado_RestoreMutationVariables>;

/**
 * __useCursoComprado_RestoreMutation__
 *
 * To run a mutation, you first call `useCursoComprado_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoCompradoRestoreMutation, { data, loading, error }] = useCursoComprado_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useCursoComprado_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<CursoComprado_RestoreMutation, CursoComprado_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CursoComprado_RestoreMutation, CursoComprado_RestoreMutationVariables>(CursoComprado_RestoreDocument, options);
      }
export type CursoComprado_RestoreMutationHookResult = ReturnType<typeof useCursoComprado_RestoreMutation>;
export type CursoComprado_RestoreMutationResult = Apollo.MutationResult<CursoComprado_RestoreMutation>;
export type CursoComprado_RestoreMutationOptions = Apollo.BaseMutationOptions<CursoComprado_RestoreMutation, CursoComprado_RestoreMutationVariables>;
export const CursoComprado_HardDeleteDocument = gql`
    mutation CursoComprado_hardDelete($cursoCompradoHardDeleteId: ID!) {
  CursoComprado_hardDelete(id: $cursoCompradoHardDeleteId) {
    _id
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;
export type CursoComprado_HardDeleteMutationFn = Apollo.MutationFunction<CursoComprado_HardDeleteMutation, CursoComprado_HardDeleteMutationVariables>;

/**
 * __useCursoComprado_HardDeleteMutation__
 *
 * To run a mutation, you first call `useCursoComprado_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoCompradoHardDeleteMutation, { data, loading, error }] = useCursoComprado_HardDeleteMutation({
 *   variables: {
 *      cursoCompradoHardDeleteId: // value for 'cursoCompradoHardDeleteId'
 *   },
 * });
 */
export function useCursoComprado_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<CursoComprado_HardDeleteMutation, CursoComprado_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CursoComprado_HardDeleteMutation, CursoComprado_HardDeleteMutationVariables>(CursoComprado_HardDeleteDocument, options);
      }
export type CursoComprado_HardDeleteMutationHookResult = ReturnType<typeof useCursoComprado_HardDeleteMutation>;
export type CursoComprado_HardDeleteMutationResult = Apollo.MutationResult<CursoComprado_HardDeleteMutation>;
export type CursoComprado_HardDeleteMutationOptions = Apollo.BaseMutationOptions<CursoComprado_HardDeleteMutation, CursoComprado_HardDeleteMutationVariables>;
export const CursoComprado_HardDeleteAllSoftDeletedDocument = gql`
    mutation CursoComprado_hardDeleteAllSoftDeleted {
  CursoComprado_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type CursoComprado_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<CursoComprado_HardDeleteAllSoftDeletedMutation, CursoComprado_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useCursoComprado_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useCursoComprado_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoCompradoHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useCursoComprado_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useCursoComprado_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<CursoComprado_HardDeleteAllSoftDeletedMutation, CursoComprado_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CursoComprado_HardDeleteAllSoftDeletedMutation, CursoComprado_HardDeleteAllSoftDeletedMutationVariables>(CursoComprado_HardDeleteAllSoftDeletedDocument, options);
      }
export type CursoComprado_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useCursoComprado_HardDeleteAllSoftDeletedMutation>;
export type CursoComprado_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<CursoComprado_HardDeleteAllSoftDeletedMutation>;
export type CursoComprado_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<CursoComprado_HardDeleteAllSoftDeletedMutation, CursoComprado_HardDeleteAllSoftDeletedMutationVariables>;
export const CursoCompradoes_PorUsuarioDocument = gql`
    query CursoCompradoes_PorUsuario($usuarioId: ID!) {
  CursoCompradoes_PorUsuario(usuarioId: $usuarioId) {
    _id
    cursoId {
      _id
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
    usuarioId {
      _id
    }
  }
}
    `;

/**
 * __useCursoCompradoes_PorUsuarioQuery__
 *
 * To run a query within a React component, call `useCursoCompradoes_PorUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoCompradoes_PorUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoCompradoes_PorUsuarioQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useCursoCompradoes_PorUsuarioQuery(baseOptions: Apollo.QueryHookOptions<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables> & ({ variables: CursoCompradoes_PorUsuarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>(CursoCompradoes_PorUsuarioDocument, options);
      }
export function useCursoCompradoes_PorUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>(CursoCompradoes_PorUsuarioDocument, options);
        }
export function useCursoCompradoes_PorUsuarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>(CursoCompradoes_PorUsuarioDocument, options);
        }
export type CursoCompradoes_PorUsuarioQueryHookResult = ReturnType<typeof useCursoCompradoes_PorUsuarioQuery>;
export type CursoCompradoes_PorUsuarioLazyQueryHookResult = ReturnType<typeof useCursoCompradoes_PorUsuarioLazyQuery>;
export type CursoCompradoes_PorUsuarioSuspenseQueryHookResult = ReturnType<typeof useCursoCompradoes_PorUsuarioSuspenseQuery>;
export type CursoCompradoes_PorUsuarioQueryResult = Apollo.QueryResult<CursoCompradoes_PorUsuarioQuery, CursoCompradoes_PorUsuarioQueryVariables>;
export const CursoCompradoes_PorCursoDocument = gql`
    query CursoCompradoes_PorCurso($cursoId: ID!) {
  CursoCompradoes_PorCurso(cursoId: $cursoId) {
    _id
    usuarioId {
      _id
    }
    cursoId {
      _id
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;

/**
 * __useCursoCompradoes_PorCursoQuery__
 *
 * To run a query within a React component, call `useCursoCompradoes_PorCursoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoCompradoes_PorCursoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoCompradoes_PorCursoQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useCursoCompradoes_PorCursoQuery(baseOptions: Apollo.QueryHookOptions<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables> & ({ variables: CursoCompradoes_PorCursoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>(CursoCompradoes_PorCursoDocument, options);
      }
export function useCursoCompradoes_PorCursoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>(CursoCompradoes_PorCursoDocument, options);
        }
export function useCursoCompradoes_PorCursoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>(CursoCompradoes_PorCursoDocument, options);
        }
export type CursoCompradoes_PorCursoQueryHookResult = ReturnType<typeof useCursoCompradoes_PorCursoQuery>;
export type CursoCompradoes_PorCursoLazyQueryHookResult = ReturnType<typeof useCursoCompradoes_PorCursoLazyQuery>;
export type CursoCompradoes_PorCursoSuspenseQueryHookResult = ReturnType<typeof useCursoCompradoes_PorCursoSuspenseQuery>;
export type CursoCompradoes_PorCursoQueryResult = Apollo.QueryResult<CursoCompradoes_PorCursoQuery, CursoCompradoes_PorCursoQueryVariables>;
export const CursoComprado_FindSoftDeletedDocument = gql`
    query CursoComprado_findSoftDeleted($offset: Int, $limit: Int) {
  CursoComprado_findSoftDeleted(offset: $offset, limit: $limit) {
    _id
    usuarioId {
      _id
    }
    cursoId {
      _id
    }
    courseTitle
    fechaCompra
    fechaExpiracion
    estadoAcceso
    progreso
    cursoCompletado
    ultimaNota
    deleted
  }
}
    `;

/**
 * __useCursoComprado_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useCursoComprado_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoComprado_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoComprado_FindSoftDeletedQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCursoComprado_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>(CursoComprado_FindSoftDeletedDocument, options);
      }
export function useCursoComprado_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>(CursoComprado_FindSoftDeletedDocument, options);
        }
export function useCursoComprado_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>(CursoComprado_FindSoftDeletedDocument, options);
        }
export type CursoComprado_FindSoftDeletedQueryHookResult = ReturnType<typeof useCursoComprado_FindSoftDeletedQuery>;
export type CursoComprado_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useCursoComprado_FindSoftDeletedLazyQuery>;
export type CursoComprado_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useCursoComprado_FindSoftDeletedSuspenseQuery>;
export type CursoComprado_FindSoftDeletedQueryResult = Apollo.QueryResult<CursoComprado_FindSoftDeletedQuery, CursoComprado_FindSoftDeletedQueryVariables>;
export const MutationDocument = gql`
    mutation Mutation($createCursoInput: CreateCursoInput!) {
  Curso_create(createCursoInput: $createCursoInput) {
    _id
    courseTitle
    precio
    objetivos
    nivel
    fechaLanzamiento
    categorias {
      nombreCategoria
      descripcion
      _id
    }
    descripcionCorta
    imagenURL {
      url
      alt
    }
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      createCursoInput: // value for 'createCursoInput'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const CursosDocument = gql`
    query Cursos($offset: Int, $limit: Int) {
  Cursos(offset: $offset, limit: $limit) {
    _id
    courseTitle
    instructor {
      firstName
    }
    imagenURL {
      url
      alt
    }
  }
}
    `;

/**
 * __useCursosQuery__
 *
 * To run a query within a React component, call `useCursosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursosQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCursosQuery(baseOptions?: Apollo.QueryHookOptions<CursosQuery, CursosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
      }
export function useCursosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursosQuery, CursosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
        }
export function useCursosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursosQuery, CursosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
        }
export type CursosQueryHookResult = ReturnType<typeof useCursosQuery>;
export type CursosLazyQueryHookResult = ReturnType<typeof useCursosLazyQuery>;
export type CursosSuspenseQueryHookResult = ReturnType<typeof useCursosSuspenseQuery>;
export type CursosQueryResult = Apollo.QueryResult<CursosQuery, CursosQueryVariables>;
export const CursoDocument = gql`
    query Curso($cursoId: ID!) {
  Curso(id: $cursoId) {
    _id
    courseTitle
    descripcionCorta
    descripcionLarga
    nivel
    instructor {
      firstName
    }
    duracionHoras
    imagenURL {
      alt
      url
    }
    precio
    currency
    descuento
    calificacionPromedio
    numeroCalificaciones
    aprenderas
    objetivos
    dirigidoA
    fechaLanzamiento
    slug
    deleted
    modulosIds
  }
}
    `;

/**
 * __useCursoQuery__
 *
 * To run a query within a React component, call `useCursoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useCursoQuery(baseOptions: Apollo.QueryHookOptions<CursoQuery, CursoQueryVariables> & ({ variables: CursoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
      }
export function useCursoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoQuery, CursoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
        }
export function useCursoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoQuery, CursoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
        }
export type CursoQueryHookResult = ReturnType<typeof useCursoQuery>;
export type CursoLazyQueryHookResult = ReturnType<typeof useCursoLazyQuery>;
export type CursoSuspenseQueryHookResult = ReturnType<typeof useCursoSuspenseQuery>;
export type CursoQueryResult = Apollo.QueryResult<CursoQuery, CursoQueryVariables>;
export const Curso_UpdateDocument = gql`
    mutation Curso_update($cursoUpdateId: ID!, $updateCursoInput: UpdateCursoInput!) {
  Curso_update(id: $cursoUpdateId, updateCursoInput: $updateCursoInput) {
    _id
    courseTitle
    descripcionCorta
    descripcionLarga
    nivel
    instructor {
      _id
      firstName
    }
    duracionHoras
    imagenURL {
      alt
      url
    }
    precio
    currency
    descuento
    calificacionPromedio
    numeroCalificaciones
    aprenderas
    objetivos
    dirigidoA
    fechaLanzamiento
    categorias {
      _id
      nombreCategoria
      descripcion
      deleted
    }
    cuestionarioId {
      _id
    }
    slug
    deleted
  }
}
    `;
export type Curso_UpdateMutationFn = Apollo.MutationFunction<Curso_UpdateMutation, Curso_UpdateMutationVariables>;

/**
 * __useCurso_UpdateMutation__
 *
 * To run a mutation, you first call `useCurso_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurso_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoUpdateMutation, { data, loading, error }] = useCurso_UpdateMutation({
 *   variables: {
 *      cursoUpdateId: // value for 'cursoUpdateId'
 *      updateCursoInput: // value for 'updateCursoInput'
 *   },
 * });
 */
export function useCurso_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Curso_UpdateMutation, Curso_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Curso_UpdateMutation, Curso_UpdateMutationVariables>(Curso_UpdateDocument, options);
      }
export type Curso_UpdateMutationHookResult = ReturnType<typeof useCurso_UpdateMutation>;
export type Curso_UpdateMutationResult = Apollo.MutationResult<Curso_UpdateMutation>;
export type Curso_UpdateMutationOptions = Apollo.BaseMutationOptions<Curso_UpdateMutation, Curso_UpdateMutationVariables>;
export const Curso_SoftDeleteDocument = gql`
    mutation Curso_softDelete($idRemove: ID!) {
  Curso_softDelete(idRemove: $idRemove) {
    courseTitle
    _id
    descripcionCorta
  }
}
    `;
export type Curso_SoftDeleteMutationFn = Apollo.MutationFunction<Curso_SoftDeleteMutation, Curso_SoftDeleteMutationVariables>;

/**
 * __useCurso_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useCurso_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurso_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoSoftDeleteMutation, { data, loading, error }] = useCurso_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useCurso_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Curso_SoftDeleteMutation, Curso_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Curso_SoftDeleteMutation, Curso_SoftDeleteMutationVariables>(Curso_SoftDeleteDocument, options);
      }
export type Curso_SoftDeleteMutationHookResult = ReturnType<typeof useCurso_SoftDeleteMutation>;
export type Curso_SoftDeleteMutationResult = Apollo.MutationResult<Curso_SoftDeleteMutation>;
export type Curso_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Curso_SoftDeleteMutation, Curso_SoftDeleteMutationVariables>;
export const Curso_FindSoftDeletedDocument = gql`
    query Curso_findSoftDeleted {
  Curso_findSoftDeleted {
    courseTitle
    cuestionarioId {
      _id
    }
    _id
    descripcionCorta
  }
}
    `;

/**
 * __useCurso_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useCurso_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurso_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurso_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurso_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>(Curso_FindSoftDeletedDocument, options);
      }
export function useCurso_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>(Curso_FindSoftDeletedDocument, options);
        }
export function useCurso_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>(Curso_FindSoftDeletedDocument, options);
        }
export type Curso_FindSoftDeletedQueryHookResult = ReturnType<typeof useCurso_FindSoftDeletedQuery>;
export type Curso_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useCurso_FindSoftDeletedLazyQuery>;
export type Curso_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useCurso_FindSoftDeletedSuspenseQuery>;
export type Curso_FindSoftDeletedQueryResult = Apollo.QueryResult<Curso_FindSoftDeletedQuery, Curso_FindSoftDeletedQueryVariables>;
export const Curso_RestoreDocument = gql`
    mutation Curso_restore($idRestore: ID!) {
  Curso_restore(idRestore: $idRestore) {
    courseTitle
    _id
    descripcionCorta
  }
}
    `;
export type Curso_RestoreMutationFn = Apollo.MutationFunction<Curso_RestoreMutation, Curso_RestoreMutationVariables>;

/**
 * __useCurso_RestoreMutation__
 *
 * To run a mutation, you first call `useCurso_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurso_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoRestoreMutation, { data, loading, error }] = useCurso_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useCurso_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Curso_RestoreMutation, Curso_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Curso_RestoreMutation, Curso_RestoreMutationVariables>(Curso_RestoreDocument, options);
      }
export type Curso_RestoreMutationHookResult = ReturnType<typeof useCurso_RestoreMutation>;
export type Curso_RestoreMutationResult = Apollo.MutationResult<Curso_RestoreMutation>;
export type Curso_RestoreMutationOptions = Apollo.BaseMutationOptions<Curso_RestoreMutation, Curso_RestoreMutationVariables>;
export const Curso_HardDeleteAllSoftDeletedDocument = gql`
    mutation Curso_hardDeleteAllSoftDeleted {
  Curso_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Curso_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Curso_HardDeleteAllSoftDeletedMutation, Curso_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useCurso_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useCurso_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurso_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useCurso_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useCurso_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Curso_HardDeleteAllSoftDeletedMutation, Curso_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Curso_HardDeleteAllSoftDeletedMutation, Curso_HardDeleteAllSoftDeletedMutationVariables>(Curso_HardDeleteAllSoftDeletedDocument, options);
      }
export type Curso_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useCurso_HardDeleteAllSoftDeletedMutation>;
export type Curso_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Curso_HardDeleteAllSoftDeletedMutation>;
export type Curso_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Curso_HardDeleteAllSoftDeletedMutation, Curso_HardDeleteAllSoftDeletedMutationVariables>;
export const Curso_HardDeleteDocument = gql`
    mutation Curso_hardDelete($cursoHardDeleteId: ID!) {
  Curso_hardDelete(id: $cursoHardDeleteId) {
    courseTitle
    _id
  }
}
    `;
export type Curso_HardDeleteMutationFn = Apollo.MutationFunction<Curso_HardDeleteMutation, Curso_HardDeleteMutationVariables>;

/**
 * __useCurso_HardDeleteMutation__
 *
 * To run a mutation, you first call `useCurso_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurso_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cursoHardDeleteMutation, { data, loading, error }] = useCurso_HardDeleteMutation({
 *   variables: {
 *      cursoHardDeleteId: // value for 'cursoHardDeleteId'
 *   },
 * });
 */
export function useCurso_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Curso_HardDeleteMutation, Curso_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Curso_HardDeleteMutation, Curso_HardDeleteMutationVariables>(Curso_HardDeleteDocument, options);
      }
export type Curso_HardDeleteMutationHookResult = ReturnType<typeof useCurso_HardDeleteMutation>;
export type Curso_HardDeleteMutationResult = Apollo.MutationResult<Curso_HardDeleteMutation>;
export type Curso_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Curso_HardDeleteMutation, Curso_HardDeleteMutationVariables>;
export const Curso_FindAllByTitleDocument = gql`
    query Curso_findAllByTitle($search: String) {
  Curso_findAllByTitle(search: $search) {
    duracionHoras
    courseTitle
    precio
    _id
  }
}
    `;

/**
 * __useCurso_FindAllByTitleQuery__
 *
 * To run a query within a React component, call `useCurso_FindAllByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurso_FindAllByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurso_FindAllByTitleQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useCurso_FindAllByTitleQuery(baseOptions?: Apollo.QueryHookOptions<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>(Curso_FindAllByTitleDocument, options);
      }
export function useCurso_FindAllByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>(Curso_FindAllByTitleDocument, options);
        }
export function useCurso_FindAllByTitleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>(Curso_FindAllByTitleDocument, options);
        }
export type Curso_FindAllByTitleQueryHookResult = ReturnType<typeof useCurso_FindAllByTitleQuery>;
export type Curso_FindAllByTitleLazyQueryHookResult = ReturnType<typeof useCurso_FindAllByTitleLazyQuery>;
export type Curso_FindAllByTitleSuspenseQueryHookResult = ReturnType<typeof useCurso_FindAllByTitleSuspenseQuery>;
export type Curso_FindAllByTitleQueryResult = Apollo.QueryResult<Curso_FindAllByTitleQuery, Curso_FindAllByTitleQueryVariables>;
export const Instructor_CreateDocument = gql`
    mutation Instructor_create($createInstructorInput: CreateInstructorInput!) {
  Instructor_create(createInstructorInput: $createInstructorInput) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;
export type Instructor_CreateMutationFn = Apollo.MutationFunction<Instructor_CreateMutation, Instructor_CreateMutationVariables>;

/**
 * __useInstructor_CreateMutation__
 *
 * To run a mutation, you first call `useInstructor_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorCreateMutation, { data, loading, error }] = useInstructor_CreateMutation({
 *   variables: {
 *      createInstructorInput: // value for 'createInstructorInput'
 *   },
 * });
 */
export function useInstructor_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_CreateMutation, Instructor_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_CreateMutation, Instructor_CreateMutationVariables>(Instructor_CreateDocument, options);
      }
export type Instructor_CreateMutationHookResult = ReturnType<typeof useInstructor_CreateMutation>;
export type Instructor_CreateMutationResult = Apollo.MutationResult<Instructor_CreateMutation>;
export type Instructor_CreateMutationOptions = Apollo.BaseMutationOptions<Instructor_CreateMutation, Instructor_CreateMutationVariables>;
export const InstructorDocument = gql`
    query Instructor($instructorId: ID!) {
  Instructor(id: $instructorId) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;

/**
 * __useInstructorQuery__
 *
 * To run a query within a React component, call `useInstructorQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstructorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstructorQuery({
 *   variables: {
 *      instructorId: // value for 'instructorId'
 *   },
 * });
 */
export function useInstructorQuery(baseOptions: Apollo.QueryHookOptions<InstructorQuery, InstructorQueryVariables> & ({ variables: InstructorQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstructorQuery, InstructorQueryVariables>(InstructorDocument, options);
      }
export function useInstructorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstructorQuery, InstructorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstructorQuery, InstructorQueryVariables>(InstructorDocument, options);
        }
export function useInstructorSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstructorQuery, InstructorQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstructorQuery, InstructorQueryVariables>(InstructorDocument, options);
        }
export type InstructorQueryHookResult = ReturnType<typeof useInstructorQuery>;
export type InstructorLazyQueryHookResult = ReturnType<typeof useInstructorLazyQuery>;
export type InstructorSuspenseQueryHookResult = ReturnType<typeof useInstructorSuspenseQuery>;
export type InstructorQueryResult = Apollo.QueryResult<InstructorQuery, InstructorQueryVariables>;
export const InstructoresDocument = gql`
    query Instructores($limit: Int) {
  Instructores(limit: $limit) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;

/**
 * __useInstructoresQuery__
 *
 * To run a query within a React component, call `useInstructoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstructoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstructoresQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useInstructoresQuery(baseOptions?: Apollo.QueryHookOptions<InstructoresQuery, InstructoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstructoresQuery, InstructoresQueryVariables>(InstructoresDocument, options);
      }
export function useInstructoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstructoresQuery, InstructoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstructoresQuery, InstructoresQueryVariables>(InstructoresDocument, options);
        }
export function useInstructoresSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstructoresQuery, InstructoresQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstructoresQuery, InstructoresQueryVariables>(InstructoresDocument, options);
        }
export type InstructoresQueryHookResult = ReturnType<typeof useInstructoresQuery>;
export type InstructoresLazyQueryHookResult = ReturnType<typeof useInstructoresLazyQuery>;
export type InstructoresSuspenseQueryHookResult = ReturnType<typeof useInstructoresSuspenseQuery>;
export type InstructoresQueryResult = Apollo.QueryResult<InstructoresQuery, InstructoresQueryVariables>;
export const Instructor_HardDeleteDocument = gql`
    mutation Instructor_hardDelete($instructorHardDeleteId: ID!) {
  Instructor_hardDelete(id: $instructorHardDeleteId) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;
export type Instructor_HardDeleteMutationFn = Apollo.MutationFunction<Instructor_HardDeleteMutation, Instructor_HardDeleteMutationVariables>;

/**
 * __useInstructor_HardDeleteMutation__
 *
 * To run a mutation, you first call `useInstructor_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorHardDeleteMutation, { data, loading, error }] = useInstructor_HardDeleteMutation({
 *   variables: {
 *      instructorHardDeleteId: // value for 'instructorHardDeleteId'
 *   },
 * });
 */
export function useInstructor_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_HardDeleteMutation, Instructor_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_HardDeleteMutation, Instructor_HardDeleteMutationVariables>(Instructor_HardDeleteDocument, options);
      }
export type Instructor_HardDeleteMutationHookResult = ReturnType<typeof useInstructor_HardDeleteMutation>;
export type Instructor_HardDeleteMutationResult = Apollo.MutationResult<Instructor_HardDeleteMutation>;
export type Instructor_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Instructor_HardDeleteMutation, Instructor_HardDeleteMutationVariables>;
export const Instructor_FindAllByNombreDocument = gql`
    query Instructor_findAllByNombre($search: String) {
  Instructor_findAllByNombre(search: $search) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;

/**
 * __useInstructor_FindAllByNombreQuery__
 *
 * To run a query within a React component, call `useInstructor_FindAllByNombreQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstructor_FindAllByNombreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstructor_FindAllByNombreQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useInstructor_FindAllByNombreQuery(baseOptions?: Apollo.QueryHookOptions<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>(Instructor_FindAllByNombreDocument, options);
      }
export function useInstructor_FindAllByNombreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>(Instructor_FindAllByNombreDocument, options);
        }
export function useInstructor_FindAllByNombreSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>(Instructor_FindAllByNombreDocument, options);
        }
export type Instructor_FindAllByNombreQueryHookResult = ReturnType<typeof useInstructor_FindAllByNombreQuery>;
export type Instructor_FindAllByNombreLazyQueryHookResult = ReturnType<typeof useInstructor_FindAllByNombreLazyQuery>;
export type Instructor_FindAllByNombreSuspenseQueryHookResult = ReturnType<typeof useInstructor_FindAllByNombreSuspenseQuery>;
export type Instructor_FindAllByNombreQueryResult = Apollo.QueryResult<Instructor_FindAllByNombreQuery, Instructor_FindAllByNombreQueryVariables>;
export const Instructor_RestoreDocument = gql`
    mutation Instructor_restore($idRestore: ID!) {
  Instructor_restore(idRestore: $idRestore) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;
export type Instructor_RestoreMutationFn = Apollo.MutationFunction<Instructor_RestoreMutation, Instructor_RestoreMutationVariables>;

/**
 * __useInstructor_RestoreMutation__
 *
 * To run a mutation, you first call `useInstructor_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorRestoreMutation, { data, loading, error }] = useInstructor_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useInstructor_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_RestoreMutation, Instructor_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_RestoreMutation, Instructor_RestoreMutationVariables>(Instructor_RestoreDocument, options);
      }
export type Instructor_RestoreMutationHookResult = ReturnType<typeof useInstructor_RestoreMutation>;
export type Instructor_RestoreMutationResult = Apollo.MutationResult<Instructor_RestoreMutation>;
export type Instructor_RestoreMutationOptions = Apollo.BaseMutationOptions<Instructor_RestoreMutation, Instructor_RestoreMutationVariables>;
export const Instructor_UpdateDocument = gql`
    mutation Instructor_update($updateInstructorInput: UpdateInstructorInput!, $instructorUpdateId: ID!) {
  Instructor_update(
    updateInstructorInput: $updateInstructorInput
    id: $instructorUpdateId
  ) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;
export type Instructor_UpdateMutationFn = Apollo.MutationFunction<Instructor_UpdateMutation, Instructor_UpdateMutationVariables>;

/**
 * __useInstructor_UpdateMutation__
 *
 * To run a mutation, you first call `useInstructor_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorUpdateMutation, { data, loading, error }] = useInstructor_UpdateMutation({
 *   variables: {
 *      updateInstructorInput: // value for 'updateInstructorInput'
 *      instructorUpdateId: // value for 'instructorUpdateId'
 *   },
 * });
 */
export function useInstructor_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_UpdateMutation, Instructor_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_UpdateMutation, Instructor_UpdateMutationVariables>(Instructor_UpdateDocument, options);
      }
export type Instructor_UpdateMutationHookResult = ReturnType<typeof useInstructor_UpdateMutation>;
export type Instructor_UpdateMutationResult = Apollo.MutationResult<Instructor_UpdateMutation>;
export type Instructor_UpdateMutationOptions = Apollo.BaseMutationOptions<Instructor_UpdateMutation, Instructor_UpdateMutationVariables>;
export const Instructor_SoftDeleteDocument = gql`
    mutation Instructor_softDelete($idRemove: ID!) {
  Instructor_softDelete(idRemove: $idRemove) {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;
export type Instructor_SoftDeleteMutationFn = Apollo.MutationFunction<Instructor_SoftDeleteMutation, Instructor_SoftDeleteMutationVariables>;

/**
 * __useInstructor_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useInstructor_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorSoftDeleteMutation, { data, loading, error }] = useInstructor_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useInstructor_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_SoftDeleteMutation, Instructor_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_SoftDeleteMutation, Instructor_SoftDeleteMutationVariables>(Instructor_SoftDeleteDocument, options);
      }
export type Instructor_SoftDeleteMutationHookResult = ReturnType<typeof useInstructor_SoftDeleteMutation>;
export type Instructor_SoftDeleteMutationResult = Apollo.MutationResult<Instructor_SoftDeleteMutation>;
export type Instructor_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Instructor_SoftDeleteMutation, Instructor_SoftDeleteMutationVariables>;
export const Instructor_FindSoftDeletedDocument = gql`
    query Instructor_findSoftDeleted {
  Instructor_findSoftDeleted {
    _id
    firstName
    lastName
    profesion
    especializacion
    calificacionPromedio
    pais
    deleted
  }
}
    `;

/**
 * __useInstructor_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useInstructor_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstructor_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstructor_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstructor_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>(Instructor_FindSoftDeletedDocument, options);
      }
export function useInstructor_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>(Instructor_FindSoftDeletedDocument, options);
        }
export function useInstructor_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>(Instructor_FindSoftDeletedDocument, options);
        }
export type Instructor_FindSoftDeletedQueryHookResult = ReturnType<typeof useInstructor_FindSoftDeletedQuery>;
export type Instructor_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useInstructor_FindSoftDeletedLazyQuery>;
export type Instructor_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useInstructor_FindSoftDeletedSuspenseQuery>;
export type Instructor_FindSoftDeletedQueryResult = Apollo.QueryResult<Instructor_FindSoftDeletedQuery, Instructor_FindSoftDeletedQueryVariables>;
export const Instructor_HardDeleteAllSoftDeletedDocument = gql`
    mutation Instructor_hardDeleteAllSoftDeleted {
  Instructor_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Instructor_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Instructor_HardDeleteAllSoftDeletedMutation, Instructor_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useInstructor_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useInstructor_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstructor_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [instructorHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useInstructor_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useInstructor_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Instructor_HardDeleteAllSoftDeletedMutation, Instructor_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Instructor_HardDeleteAllSoftDeletedMutation, Instructor_HardDeleteAllSoftDeletedMutationVariables>(Instructor_HardDeleteAllSoftDeletedDocument, options);
      }
export type Instructor_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useInstructor_HardDeleteAllSoftDeletedMutation>;
export type Instructor_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Instructor_HardDeleteAllSoftDeletedMutation>;
export type Instructor_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Instructor_HardDeleteAllSoftDeletedMutation, Instructor_HardDeleteAllSoftDeletedMutationVariables>;
export const Material_CreateDocument = gql`
    mutation Material_create($idModulo: ID!, $idUnidad: ID!, $createOpcionInput: CreateMaterialInput!) {
  Material_create(
    idModulo: $idModulo
    idUnidad: $idUnidad
    createOpcionInput: $createOpcionInput
  ) {
    _id
    materialTitle
    descripcion
    url
  }
}
    `;
export type Material_CreateMutationFn = Apollo.MutationFunction<Material_CreateMutation, Material_CreateMutationVariables>;

/**
 * __useMaterial_CreateMutation__
 *
 * To run a mutation, you first call `useMaterial_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialCreateMutation, { data, loading, error }] = useMaterial_CreateMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      createOpcionInput: // value for 'createOpcionInput'
 *   },
 * });
 */
export function useMaterial_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Material_CreateMutation, Material_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_CreateMutation, Material_CreateMutationVariables>(Material_CreateDocument, options);
      }
export type Material_CreateMutationHookResult = ReturnType<typeof useMaterial_CreateMutation>;
export type Material_CreateMutationResult = Apollo.MutationResult<Material_CreateMutation>;
export type Material_CreateMutationOptions = Apollo.BaseMutationOptions<Material_CreateMutation, Material_CreateMutationVariables>;
export const MaterialesDocument = gql`
    query Materiales($idModulo: ID!, $idUnidad: ID!) {
  Materiales(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    materialTitle
    descripcion
    url
  }
}
    `;

/**
 * __useMaterialesQuery__
 *
 * To run a query within a React component, call `useMaterialesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialesQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useMaterialesQuery(baseOptions: Apollo.QueryHookOptions<MaterialesQuery, MaterialesQueryVariables> & ({ variables: MaterialesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialesQuery, MaterialesQueryVariables>(MaterialesDocument, options);
      }
export function useMaterialesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialesQuery, MaterialesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialesQuery, MaterialesQueryVariables>(MaterialesDocument, options);
        }
export function useMaterialesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MaterialesQuery, MaterialesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MaterialesQuery, MaterialesQueryVariables>(MaterialesDocument, options);
        }
export type MaterialesQueryHookResult = ReturnType<typeof useMaterialesQuery>;
export type MaterialesLazyQueryHookResult = ReturnType<typeof useMaterialesLazyQuery>;
export type MaterialesSuspenseQueryHookResult = ReturnType<typeof useMaterialesSuspenseQuery>;
export type MaterialesQueryResult = Apollo.QueryResult<MaterialesQuery, MaterialesQueryVariables>;
export const MaterialDocument = gql`
    query Material($idModulo: ID!, $idUnidad: ID!, $idMaterial: ID!) {
  Material(idModulo: $idModulo, idUnidad: $idUnidad, idMaterial: $idMaterial) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;

/**
 * __useMaterialQuery__
 *
 * To run a query within a React component, call `useMaterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      idMaterial: // value for 'idMaterial'
 *   },
 * });
 */
export function useMaterialQuery(baseOptions: Apollo.QueryHookOptions<MaterialQuery, MaterialQueryVariables> & ({ variables: MaterialQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, options);
      }
export function useMaterialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, options);
        }
export function useMaterialSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, options);
        }
export type MaterialQueryHookResult = ReturnType<typeof useMaterialQuery>;
export type MaterialLazyQueryHookResult = ReturnType<typeof useMaterialLazyQuery>;
export type MaterialSuspenseQueryHookResult = ReturnType<typeof useMaterialSuspenseQuery>;
export type MaterialQueryResult = Apollo.QueryResult<MaterialQuery, MaterialQueryVariables>;
export const Material_UpdateDocument = gql`
    mutation Material_update($idModulo: ID!, $idUnidad: ID!, $idMaterial: ID!, $updateOpcionInput: UpdateMaterialInput!) {
  Material_update(
    idModulo: $idModulo
    idUnidad: $idUnidad
    idMaterial: $idMaterial
    updateOpcionInput: $updateOpcionInput
  ) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;
export type Material_UpdateMutationFn = Apollo.MutationFunction<Material_UpdateMutation, Material_UpdateMutationVariables>;

/**
 * __useMaterial_UpdateMutation__
 *
 * To run a mutation, you first call `useMaterial_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialUpdateMutation, { data, loading, error }] = useMaterial_UpdateMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      idMaterial: // value for 'idMaterial'
 *      updateOpcionInput: // value for 'updateOpcionInput'
 *   },
 * });
 */
export function useMaterial_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Material_UpdateMutation, Material_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_UpdateMutation, Material_UpdateMutationVariables>(Material_UpdateDocument, options);
      }
export type Material_UpdateMutationHookResult = ReturnType<typeof useMaterial_UpdateMutation>;
export type Material_UpdateMutationResult = Apollo.MutationResult<Material_UpdateMutation>;
export type Material_UpdateMutationOptions = Apollo.BaseMutationOptions<Material_UpdateMutation, Material_UpdateMutationVariables>;
export const Material_SoftDeleteDocument = gql`
    mutation Material_softDelete($idModulo: ID!, $idUnidad: ID!, $idMaterial: ID!) {
  Material_softDelete(
    idModulo: $idModulo
    idUnidad: $idUnidad
    idMaterial: $idMaterial
  ) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;
export type Material_SoftDeleteMutationFn = Apollo.MutationFunction<Material_SoftDeleteMutation, Material_SoftDeleteMutationVariables>;

/**
 * __useMaterial_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useMaterial_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialSoftDeleteMutation, { data, loading, error }] = useMaterial_SoftDeleteMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      idMaterial: // value for 'idMaterial'
 *   },
 * });
 */
export function useMaterial_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Material_SoftDeleteMutation, Material_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_SoftDeleteMutation, Material_SoftDeleteMutationVariables>(Material_SoftDeleteDocument, options);
      }
export type Material_SoftDeleteMutationHookResult = ReturnType<typeof useMaterial_SoftDeleteMutation>;
export type Material_SoftDeleteMutationResult = Apollo.MutationResult<Material_SoftDeleteMutation>;
export type Material_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Material_SoftDeleteMutation, Material_SoftDeleteMutationVariables>;
export const Material_FindSoftDeletedDocument = gql`
    query Material_findSoftDeleted($idModulo: ID!, $idUnidad: ID!) {
  Material_findSoftDeleted(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;

/**
 * __useMaterial_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useMaterial_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterial_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterial_FindSoftDeletedQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useMaterial_FindSoftDeletedQuery(baseOptions: Apollo.QueryHookOptions<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables> & ({ variables: Material_FindSoftDeletedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>(Material_FindSoftDeletedDocument, options);
      }
export function useMaterial_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>(Material_FindSoftDeletedDocument, options);
        }
export function useMaterial_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>(Material_FindSoftDeletedDocument, options);
        }
export type Material_FindSoftDeletedQueryHookResult = ReturnType<typeof useMaterial_FindSoftDeletedQuery>;
export type Material_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useMaterial_FindSoftDeletedLazyQuery>;
export type Material_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useMaterial_FindSoftDeletedSuspenseQuery>;
export type Material_FindSoftDeletedQueryResult = Apollo.QueryResult<Material_FindSoftDeletedQuery, Material_FindSoftDeletedQueryVariables>;
export const Material_RestoreDocument = gql`
    mutation Material_restore($idModulo: ID!, $idUnidad: ID!, $idMaterial: ID!) {
  Material_restore(
    idModulo: $idModulo
    idUnidad: $idUnidad
    idMaterial: $idMaterial
  ) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;
export type Material_RestoreMutationFn = Apollo.MutationFunction<Material_RestoreMutation, Material_RestoreMutationVariables>;

/**
 * __useMaterial_RestoreMutation__
 *
 * To run a mutation, you first call `useMaterial_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialRestoreMutation, { data, loading, error }] = useMaterial_RestoreMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      idMaterial: // value for 'idMaterial'
 *   },
 * });
 */
export function useMaterial_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Material_RestoreMutation, Material_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_RestoreMutation, Material_RestoreMutationVariables>(Material_RestoreDocument, options);
      }
export type Material_RestoreMutationHookResult = ReturnType<typeof useMaterial_RestoreMutation>;
export type Material_RestoreMutationResult = Apollo.MutationResult<Material_RestoreMutation>;
export type Material_RestoreMutationOptions = Apollo.BaseMutationOptions<Material_RestoreMutation, Material_RestoreMutationVariables>;
export const Material_HardDeleteDocument = gql`
    mutation Material_hardDelete($idModulo: ID!, $idUnidad: ID!, $idMaterial: ID!) {
  Material_hardDelete(
    idModulo: $idModulo
    idUnidad: $idUnidad
    idMaterial: $idMaterial
  ) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;
export type Material_HardDeleteMutationFn = Apollo.MutationFunction<Material_HardDeleteMutation, Material_HardDeleteMutationVariables>;

/**
 * __useMaterial_HardDeleteMutation__
 *
 * To run a mutation, you first call `useMaterial_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialHardDeleteMutation, { data, loading, error }] = useMaterial_HardDeleteMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      idMaterial: // value for 'idMaterial'
 *   },
 * });
 */
export function useMaterial_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Material_HardDeleteMutation, Material_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_HardDeleteMutation, Material_HardDeleteMutationVariables>(Material_HardDeleteDocument, options);
      }
export type Material_HardDeleteMutationHookResult = ReturnType<typeof useMaterial_HardDeleteMutation>;
export type Material_HardDeleteMutationResult = Apollo.MutationResult<Material_HardDeleteMutation>;
export type Material_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Material_HardDeleteMutation, Material_HardDeleteMutationVariables>;
export const Material_HardDeleteAllSoftDeletedDocument = gql`
    mutation Material_hardDeleteAllSoftDeleted($idModulo: ID!, $idUnidad: ID!) {
  Material_hardDeleteAllSoftDeleted(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    materialTitle
    descripcion
    url
    deleted
  }
}
    `;
export type Material_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Material_HardDeleteAllSoftDeletedMutation, Material_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useMaterial_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useMaterial_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMaterial_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [materialHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useMaterial_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useMaterial_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Material_HardDeleteAllSoftDeletedMutation, Material_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Material_HardDeleteAllSoftDeletedMutation, Material_HardDeleteAllSoftDeletedMutationVariables>(Material_HardDeleteAllSoftDeletedDocument, options);
      }
export type Material_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useMaterial_HardDeleteAllSoftDeletedMutation>;
export type Material_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Material_HardDeleteAllSoftDeletedMutation>;
export type Material_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Material_HardDeleteAllSoftDeletedMutation, Material_HardDeleteAllSoftDeletedMutationVariables>;
export const Modulo_CreateDocument = gql`
    mutation Modulo_create($createModuloInput: CreateModuloInput!) {
  Modulo_create(createModuloInput: $createModuloInput) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;
export type Modulo_CreateMutationFn = Apollo.MutationFunction<Modulo_CreateMutation, Modulo_CreateMutationVariables>;

/**
 * __useModulo_CreateMutation__
 *
 * To run a mutation, you first call `useModulo_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloCreateMutation, { data, loading, error }] = useModulo_CreateMutation({
 *   variables: {
 *      createModuloInput: // value for 'createModuloInput'
 *   },
 * });
 */
export function useModulo_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_CreateMutation, Modulo_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_CreateMutation, Modulo_CreateMutationVariables>(Modulo_CreateDocument, options);
      }
export type Modulo_CreateMutationHookResult = ReturnType<typeof useModulo_CreateMutation>;
export type Modulo_CreateMutationResult = Apollo.MutationResult<Modulo_CreateMutation>;
export type Modulo_CreateMutationOptions = Apollo.BaseMutationOptions<Modulo_CreateMutation, Modulo_CreateMutationVariables>;
export const ModulosDocument = gql`
    query Modulos {
  Modulos {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;

/**
 * __useModulosQuery__
 *
 * To run a query within a React component, call `useModulosQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulosQuery({
 *   variables: {
 *   },
 * });
 */
export function useModulosQuery(baseOptions?: Apollo.QueryHookOptions<ModulosQuery, ModulosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
      }
export function useModulosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModulosQuery, ModulosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
        }
export function useModulosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModulosQuery, ModulosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
        }
export type ModulosQueryHookResult = ReturnType<typeof useModulosQuery>;
export type ModulosLazyQueryHookResult = ReturnType<typeof useModulosLazyQuery>;
export type ModulosSuspenseQueryHookResult = ReturnType<typeof useModulosSuspenseQuery>;
export type ModulosQueryResult = Apollo.QueryResult<ModulosQuery, ModulosQueryVariables>;
export const ModuloDocument = gql`
    query Modulo($moduloId: ID!) {
  Modulo(id: $moduloId) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;

/**
 * __useModuloQuery__
 *
 * To run a query within a React component, call `useModuloQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuloQuery({
 *   variables: {
 *      moduloId: // value for 'moduloId'
 *   },
 * });
 */
export function useModuloQuery(baseOptions: Apollo.QueryHookOptions<ModuloQuery, ModuloQueryVariables> & ({ variables: ModuloQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
      }
export function useModuloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModuloQuery, ModuloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
        }
export function useModuloSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModuloQuery, ModuloQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
        }
export type ModuloQueryHookResult = ReturnType<typeof useModuloQuery>;
export type ModuloLazyQueryHookResult = ReturnType<typeof useModuloLazyQuery>;
export type ModuloSuspenseQueryHookResult = ReturnType<typeof useModuloSuspenseQuery>;
export type ModuloQueryResult = Apollo.QueryResult<ModuloQuery, ModuloQueryVariables>;
export const Modulo_FindByCursoIdDocument = gql`
    query Modulo_findByCursoId($cursoId: ID!) {
  Modulo_findByCursoId(cursoId: $cursoId) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;

/**
 * __useModulo_FindByCursoIdQuery__
 *
 * To run a query within a React component, call `useModulo_FindByCursoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulo_FindByCursoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulo_FindByCursoIdQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useModulo_FindByCursoIdQuery(baseOptions: Apollo.QueryHookOptions<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables> & ({ variables: Modulo_FindByCursoIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>(Modulo_FindByCursoIdDocument, options);
      }
export function useModulo_FindByCursoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>(Modulo_FindByCursoIdDocument, options);
        }
export function useModulo_FindByCursoIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>(Modulo_FindByCursoIdDocument, options);
        }
export type Modulo_FindByCursoIdQueryHookResult = ReturnType<typeof useModulo_FindByCursoIdQuery>;
export type Modulo_FindByCursoIdLazyQueryHookResult = ReturnType<typeof useModulo_FindByCursoIdLazyQuery>;
export type Modulo_FindByCursoIdSuspenseQueryHookResult = ReturnType<typeof useModulo_FindByCursoIdSuspenseQuery>;
export type Modulo_FindByCursoIdQueryResult = Apollo.QueryResult<Modulo_FindByCursoIdQuery, Modulo_FindByCursoIdQueryVariables>;
export const Modulo_FindSoftDeletedDocument = gql`
    query Modulo_findSoftDeleted {
  Modulo_findSoftDeleted {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;

/**
 * __useModulo_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useModulo_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulo_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulo_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useModulo_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>(Modulo_FindSoftDeletedDocument, options);
      }
export function useModulo_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>(Modulo_FindSoftDeletedDocument, options);
        }
export function useModulo_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>(Modulo_FindSoftDeletedDocument, options);
        }
export type Modulo_FindSoftDeletedQueryHookResult = ReturnType<typeof useModulo_FindSoftDeletedQuery>;
export type Modulo_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useModulo_FindSoftDeletedLazyQuery>;
export type Modulo_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useModulo_FindSoftDeletedSuspenseQuery>;
export type Modulo_FindSoftDeletedQueryResult = Apollo.QueryResult<Modulo_FindSoftDeletedQuery, Modulo_FindSoftDeletedQueryVariables>;
export const Modulo_UpdateDocument = gql`
    mutation Modulo_update($updateCuestionarioInput: UpdateModuloInput!, $moduloUpdateId: ID!) {
  Modulo_update(
    updateCuestionarioInput: $updateCuestionarioInput
    id: $moduloUpdateId
  ) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;
export type Modulo_UpdateMutationFn = Apollo.MutationFunction<Modulo_UpdateMutation, Modulo_UpdateMutationVariables>;

/**
 * __useModulo_UpdateMutation__
 *
 * To run a mutation, you first call `useModulo_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloUpdateMutation, { data, loading, error }] = useModulo_UpdateMutation({
 *   variables: {
 *      updateCuestionarioInput: // value for 'updateCuestionarioInput'
 *      moduloUpdateId: // value for 'moduloUpdateId'
 *   },
 * });
 */
export function useModulo_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_UpdateMutation, Modulo_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_UpdateMutation, Modulo_UpdateMutationVariables>(Modulo_UpdateDocument, options);
      }
export type Modulo_UpdateMutationHookResult = ReturnType<typeof useModulo_UpdateMutation>;
export type Modulo_UpdateMutationResult = Apollo.MutationResult<Modulo_UpdateMutation>;
export type Modulo_UpdateMutationOptions = Apollo.BaseMutationOptions<Modulo_UpdateMutation, Modulo_UpdateMutationVariables>;
export const Modulo_SoftDeleteDocument = gql`
    mutation Modulo_softDelete($idRemove: ID!) {
  Modulo_softDelete(idRemove: $idRemove) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;
export type Modulo_SoftDeleteMutationFn = Apollo.MutationFunction<Modulo_SoftDeleteMutation, Modulo_SoftDeleteMutationVariables>;

/**
 * __useModulo_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useModulo_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloSoftDeleteMutation, { data, loading, error }] = useModulo_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useModulo_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_SoftDeleteMutation, Modulo_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_SoftDeleteMutation, Modulo_SoftDeleteMutationVariables>(Modulo_SoftDeleteDocument, options);
      }
export type Modulo_SoftDeleteMutationHookResult = ReturnType<typeof useModulo_SoftDeleteMutation>;
export type Modulo_SoftDeleteMutationResult = Apollo.MutationResult<Modulo_SoftDeleteMutation>;
export type Modulo_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Modulo_SoftDeleteMutation, Modulo_SoftDeleteMutationVariables>;
export const Modulo_RestoreDocument = gql`
    mutation Modulo_restore($idRestore: ID!) {
  Modulo_restore(idRestore: $idRestore) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;
export type Modulo_RestoreMutationFn = Apollo.MutationFunction<Modulo_RestoreMutation, Modulo_RestoreMutationVariables>;

/**
 * __useModulo_RestoreMutation__
 *
 * To run a mutation, you first call `useModulo_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloRestoreMutation, { data, loading, error }] = useModulo_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useModulo_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_RestoreMutation, Modulo_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_RestoreMutation, Modulo_RestoreMutationVariables>(Modulo_RestoreDocument, options);
      }
export type Modulo_RestoreMutationHookResult = ReturnType<typeof useModulo_RestoreMutation>;
export type Modulo_RestoreMutationResult = Apollo.MutationResult<Modulo_RestoreMutation>;
export type Modulo_RestoreMutationOptions = Apollo.BaseMutationOptions<Modulo_RestoreMutation, Modulo_RestoreMutationVariables>;
export const Modulo_HardDeleteDocument = gql`
    mutation Modulo_hardDelete($moduloHardDeleteId: ID!) {
  Modulo_hardDelete(id: $moduloHardDeleteId) {
    _id
    cursoId
    numeroModulo
    moduloTitle
    descripcion
    unidades {
      _id
      moduloId
      numeroUnidad
      unidadTitle
      descripcion
      urlVideo
      materiales {
        _id
        materialTitle
        descripcion
        url
      }
      deleted
    }
    deleted
  }
}
    `;
export type Modulo_HardDeleteMutationFn = Apollo.MutationFunction<Modulo_HardDeleteMutation, Modulo_HardDeleteMutationVariables>;

/**
 * __useModulo_HardDeleteMutation__
 *
 * To run a mutation, you first call `useModulo_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloHardDeleteMutation, { data, loading, error }] = useModulo_HardDeleteMutation({
 *   variables: {
 *      moduloHardDeleteId: // value for 'moduloHardDeleteId'
 *   },
 * });
 */
export function useModulo_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_HardDeleteMutation, Modulo_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_HardDeleteMutation, Modulo_HardDeleteMutationVariables>(Modulo_HardDeleteDocument, options);
      }
export type Modulo_HardDeleteMutationHookResult = ReturnType<typeof useModulo_HardDeleteMutation>;
export type Modulo_HardDeleteMutationResult = Apollo.MutationResult<Modulo_HardDeleteMutation>;
export type Modulo_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Modulo_HardDeleteMutation, Modulo_HardDeleteMutationVariables>;
export const Modulo_HardDeleteAllSoftDeletedDocument = gql`
    mutation Modulo_hardDeleteAllSoftDeleted {
  Modulo_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Modulo_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Modulo_HardDeleteAllSoftDeletedMutation, Modulo_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useModulo_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useModulo_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModulo_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moduloHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useModulo_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useModulo_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Modulo_HardDeleteAllSoftDeletedMutation, Modulo_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Modulo_HardDeleteAllSoftDeletedMutation, Modulo_HardDeleteAllSoftDeletedMutationVariables>(Modulo_HardDeleteAllSoftDeletedDocument, options);
      }
export type Modulo_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useModulo_HardDeleteAllSoftDeletedMutation>;
export type Modulo_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Modulo_HardDeleteAllSoftDeletedMutation>;
export type Modulo_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Modulo_HardDeleteAllSoftDeletedMutation, Modulo_HardDeleteAllSoftDeletedMutationVariables>;
export const Opcion_CreateDocument = gql`
    mutation Opcion_create($idCuestionario: ID!, $idPregunta: ID!, $createOpcionInput: CreateOpcionInput!) {
  Opcion_create(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    createOpcionInput: $createOpcionInput
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;
export type Opcion_CreateMutationFn = Apollo.MutationFunction<Opcion_CreateMutation, Opcion_CreateMutationVariables>;

/**
 * __useOpcion_CreateMutation__
 *
 * To run a mutation, you first call `useOpcion_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpcion_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [opcionCreateMutation, { data, loading, error }] = useOpcion_CreateMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      createOpcionInput: // value for 'createOpcionInput'
 *   },
 * });
 */
export function useOpcion_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Opcion_CreateMutation, Opcion_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Opcion_CreateMutation, Opcion_CreateMutationVariables>(Opcion_CreateDocument, options);
      }
export type Opcion_CreateMutationHookResult = ReturnType<typeof useOpcion_CreateMutation>;
export type Opcion_CreateMutationResult = Apollo.MutationResult<Opcion_CreateMutation>;
export type Opcion_CreateMutationOptions = Apollo.BaseMutationOptions<Opcion_CreateMutation, Opcion_CreateMutationVariables>;
export const Opcion_FindByIdDocument = gql`
    query Opcion_findById($idCuestionario: ID!, $idPregunta: ID!, $idOpcion: ID!) {
  Opcion(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    idOpcion: $idOpcion
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;

/**
 * __useOpcion_FindByIdQuery__
 *
 * To run a query within a React component, call `useOpcion_FindByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpcion_FindByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpcion_FindByIdQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      idOpcion: // value for 'idOpcion'
 *   },
 * });
 */
export function useOpcion_FindByIdQuery(baseOptions: Apollo.QueryHookOptions<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables> & ({ variables: Opcion_FindByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>(Opcion_FindByIdDocument, options);
      }
export function useOpcion_FindByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>(Opcion_FindByIdDocument, options);
        }
export function useOpcion_FindByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>(Opcion_FindByIdDocument, options);
        }
export type Opcion_FindByIdQueryHookResult = ReturnType<typeof useOpcion_FindByIdQuery>;
export type Opcion_FindByIdLazyQueryHookResult = ReturnType<typeof useOpcion_FindByIdLazyQuery>;
export type Opcion_FindByIdSuspenseQueryHookResult = ReturnType<typeof useOpcion_FindByIdSuspenseQuery>;
export type Opcion_FindByIdQueryResult = Apollo.QueryResult<Opcion_FindByIdQuery, Opcion_FindByIdQueryVariables>;
export const Opcion_UpdateDocument = gql`
    mutation Opcion_update($idCuestionario: ID!, $idPregunta: ID!, $idOpcion: ID!, $updateOpcionInput: UpdateOpcionInput!) {
  Opcion_update(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    idOpcion: $idOpcion
    updateOpcionInput: $updateOpcionInput
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;
export type Opcion_UpdateMutationFn = Apollo.MutationFunction<Opcion_UpdateMutation, Opcion_UpdateMutationVariables>;

/**
 * __useOpcion_UpdateMutation__
 *
 * To run a mutation, you first call `useOpcion_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpcion_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [opcionUpdateMutation, { data, loading, error }] = useOpcion_UpdateMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      idOpcion: // value for 'idOpcion'
 *      updateOpcionInput: // value for 'updateOpcionInput'
 *   },
 * });
 */
export function useOpcion_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Opcion_UpdateMutation, Opcion_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Opcion_UpdateMutation, Opcion_UpdateMutationVariables>(Opcion_UpdateDocument, options);
      }
export type Opcion_UpdateMutationHookResult = ReturnType<typeof useOpcion_UpdateMutation>;
export type Opcion_UpdateMutationResult = Apollo.MutationResult<Opcion_UpdateMutation>;
export type Opcion_UpdateMutationOptions = Apollo.BaseMutationOptions<Opcion_UpdateMutation, Opcion_UpdateMutationVariables>;
export const OpcionesDocument = gql`
    query Opciones($idCuestionario: ID!, $idPregunta: ID!) {
  Opciones(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;

/**
 * __useOpcionesQuery__
 *
 * To run a query within a React component, call `useOpcionesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpcionesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpcionesQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function useOpcionesQuery(baseOptions: Apollo.QueryHookOptions<OpcionesQuery, OpcionesQueryVariables> & ({ variables: OpcionesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OpcionesQuery, OpcionesQueryVariables>(OpcionesDocument, options);
      }
export function useOpcionesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OpcionesQuery, OpcionesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OpcionesQuery, OpcionesQueryVariables>(OpcionesDocument, options);
        }
export function useOpcionesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OpcionesQuery, OpcionesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OpcionesQuery, OpcionesQueryVariables>(OpcionesDocument, options);
        }
export type OpcionesQueryHookResult = ReturnType<typeof useOpcionesQuery>;
export type OpcionesLazyQueryHookResult = ReturnType<typeof useOpcionesLazyQuery>;
export type OpcionesSuspenseQueryHookResult = ReturnType<typeof useOpcionesSuspenseQuery>;
export type OpcionesQueryResult = Apollo.QueryResult<OpcionesQuery, OpcionesQueryVariables>;
export const Opcion_SoftDeleteDocument = gql`
    mutation Opcion_softDelete($idCuestionario: ID!, $idPregunta: ID!, $idOpcion: ID!) {
  Opcion_softDelete(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    idOpcion: $idOpcion
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;
export type Opcion_SoftDeleteMutationFn = Apollo.MutationFunction<Opcion_SoftDeleteMutation, Opcion_SoftDeleteMutationVariables>;

/**
 * __useOpcion_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useOpcion_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpcion_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [opcionSoftDeleteMutation, { data, loading, error }] = useOpcion_SoftDeleteMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      idOpcion: // value for 'idOpcion'
 *   },
 * });
 */
export function useOpcion_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Opcion_SoftDeleteMutation, Opcion_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Opcion_SoftDeleteMutation, Opcion_SoftDeleteMutationVariables>(Opcion_SoftDeleteDocument, options);
      }
export type Opcion_SoftDeleteMutationHookResult = ReturnType<typeof useOpcion_SoftDeleteMutation>;
export type Opcion_SoftDeleteMutationResult = Apollo.MutationResult<Opcion_SoftDeleteMutation>;
export type Opcion_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Opcion_SoftDeleteMutation, Opcion_SoftDeleteMutationVariables>;
export const Opcion_RestoreDocument = gql`
    mutation Opcion_restore($idCuestionario: ID!, $idPregunta: ID!, $idOpcion: ID!) {
  Opcion_restore(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    idOpcion: $idOpcion
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;
export type Opcion_RestoreMutationFn = Apollo.MutationFunction<Opcion_RestoreMutation, Opcion_RestoreMutationVariables>;

/**
 * __useOpcion_RestoreMutation__
 *
 * To run a mutation, you first call `useOpcion_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpcion_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [opcionRestoreMutation, { data, loading, error }] = useOpcion_RestoreMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      idOpcion: // value for 'idOpcion'
 *   },
 * });
 */
export function useOpcion_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Opcion_RestoreMutation, Opcion_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Opcion_RestoreMutation, Opcion_RestoreMutationVariables>(Opcion_RestoreDocument, options);
      }
export type Opcion_RestoreMutationHookResult = ReturnType<typeof useOpcion_RestoreMutation>;
export type Opcion_RestoreMutationResult = Apollo.MutationResult<Opcion_RestoreMutation>;
export type Opcion_RestoreMutationOptions = Apollo.BaseMutationOptions<Opcion_RestoreMutation, Opcion_RestoreMutationVariables>;
export const Opcion_FindSoftDeletedDocument = gql`
    query Opcion_findSoftDeleted($idCuestionario: ID!, $idPregunta: ID!) {
  Opcion_findSoftDeleted(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;

/**
 * __useOpcion_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useOpcion_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpcion_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpcion_FindSoftDeletedQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function useOpcion_FindSoftDeletedQuery(baseOptions: Apollo.QueryHookOptions<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables> & ({ variables: Opcion_FindSoftDeletedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>(Opcion_FindSoftDeletedDocument, options);
      }
export function useOpcion_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>(Opcion_FindSoftDeletedDocument, options);
        }
export function useOpcion_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>(Opcion_FindSoftDeletedDocument, options);
        }
export type Opcion_FindSoftDeletedQueryHookResult = ReturnType<typeof useOpcion_FindSoftDeletedQuery>;
export type Opcion_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useOpcion_FindSoftDeletedLazyQuery>;
export type Opcion_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useOpcion_FindSoftDeletedSuspenseQuery>;
export type Opcion_FindSoftDeletedQueryResult = Apollo.QueryResult<Opcion_FindSoftDeletedQuery, Opcion_FindSoftDeletedQueryVariables>;
export const Opcion_HardDeleteDocument = gql`
    mutation Opcion_hardDelete($idCuestionario: ID!, $idPregunta: ID!, $idOpcion: ID!) {
  Opcion_hardDelete(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    idOpcion: $idOpcion
  ) {
    _id
    textOpcion
    esCorrecta
    orden
    deleted
  }
}
    `;
export type Opcion_HardDeleteMutationFn = Apollo.MutationFunction<Opcion_HardDeleteMutation, Opcion_HardDeleteMutationVariables>;

/**
 * __useOpcion_HardDeleteMutation__
 *
 * To run a mutation, you first call `useOpcion_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpcion_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [opcionHardDeleteMutation, { data, loading, error }] = useOpcion_HardDeleteMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      idOpcion: // value for 'idOpcion'
 *   },
 * });
 */
export function useOpcion_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Opcion_HardDeleteMutation, Opcion_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Opcion_HardDeleteMutation, Opcion_HardDeleteMutationVariables>(Opcion_HardDeleteDocument, options);
      }
export type Opcion_HardDeleteMutationHookResult = ReturnType<typeof useOpcion_HardDeleteMutation>;
export type Opcion_HardDeleteMutationResult = Apollo.MutationResult<Opcion_HardDeleteMutation>;
export type Opcion_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Opcion_HardDeleteMutation, Opcion_HardDeleteMutationVariables>;
export const OrdenesDocument = gql`
    query Ordenes {
  Ordenes {
    _id
    usuarioId
    listaCursos {
      precio
      courseTitle
      descuento
      cursoId
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;

/**
 * __useOrdenesQuery__
 *
 * To run a query within a React component, call `useOrdenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdenesQuery(baseOptions?: Apollo.QueryHookOptions<OrdenesQuery, OrdenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdenesQuery, OrdenesQueryVariables>(OrdenesDocument, options);
      }
export function useOrdenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdenesQuery, OrdenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdenesQuery, OrdenesQueryVariables>(OrdenesDocument, options);
        }
export function useOrdenesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrdenesQuery, OrdenesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdenesQuery, OrdenesQueryVariables>(OrdenesDocument, options);
        }
export type OrdenesQueryHookResult = ReturnType<typeof useOrdenesQuery>;
export type OrdenesLazyQueryHookResult = ReturnType<typeof useOrdenesLazyQuery>;
export type OrdenesSuspenseQueryHookResult = ReturnType<typeof useOrdenesSuspenseQuery>;
export type OrdenesQueryResult = Apollo.QueryResult<OrdenesQuery, OrdenesQueryVariables>;
export const Ordenes_CreateDocument = gql`
    mutation Ordenes_create($arrayCursosIds: [ID!]!) {
  Ordenes_create(arrayCursosIds: $arrayCursosIds) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_CreateMutationFn = Apollo.MutationFunction<Ordenes_CreateMutation, Ordenes_CreateMutationVariables>;

/**
 * __useOrdenes_CreateMutation__
 *
 * To run a mutation, you first call `useOrdenes_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesCreateMutation, { data, loading, error }] = useOrdenes_CreateMutation({
 *   variables: {
 *      arrayCursosIds: // value for 'arrayCursosIds'
 *   },
 * });
 */
export function useOrdenes_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_CreateMutation, Ordenes_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_CreateMutation, Ordenes_CreateMutationVariables>(Ordenes_CreateDocument, options);
      }
export type Ordenes_CreateMutationHookResult = ReturnType<typeof useOrdenes_CreateMutation>;
export type Ordenes_CreateMutationResult = Apollo.MutationResult<Ordenes_CreateMutation>;
export type Ordenes_CreateMutationOptions = Apollo.BaseMutationOptions<Ordenes_CreateMutation, Ordenes_CreateMutationVariables>;
export const OrdenDocument = gql`
    query Orden($ordenId: ID!) {
  Orden(id: $ordenId) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;

/**
 * __useOrdenQuery__
 *
 * To run a query within a React component, call `useOrdenQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdenQuery({
 *   variables: {
 *      ordenId: // value for 'ordenId'
 *   },
 * });
 */
export function useOrdenQuery(baseOptions: Apollo.QueryHookOptions<OrdenQuery, OrdenQueryVariables> & ({ variables: OrdenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdenQuery, OrdenQueryVariables>(OrdenDocument, options);
      }
export function useOrdenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdenQuery, OrdenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdenQuery, OrdenQueryVariables>(OrdenDocument, options);
        }
export function useOrdenSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrdenQuery, OrdenQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdenQuery, OrdenQueryVariables>(OrdenDocument, options);
        }
export type OrdenQueryHookResult = ReturnType<typeof useOrdenQuery>;
export type OrdenLazyQueryHookResult = ReturnType<typeof useOrdenLazyQuery>;
export type OrdenSuspenseQueryHookResult = ReturnType<typeof useOrdenSuspenseQuery>;
export type OrdenQueryResult = Apollo.QueryResult<OrdenQuery, OrdenQueryVariables>;
export const Ordenes_FindAllByUsuarioIdDocument = gql`
    query Ordenes_findAllByUsuarioId($idUsuario: ID!) {
  Ordenes_findAllByUsuarioId(idUsuario: $idUsuario) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;

/**
 * __useOrdenes_FindAllByUsuarioIdQuery__
 *
 * To run a query within a React component, call `useOrdenes_FindAllByUsuarioIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_FindAllByUsuarioIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdenes_FindAllByUsuarioIdQuery({
 *   variables: {
 *      idUsuario: // value for 'idUsuario'
 *   },
 * });
 */
export function useOrdenes_FindAllByUsuarioIdQuery(baseOptions: Apollo.QueryHookOptions<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables> & ({ variables: Ordenes_FindAllByUsuarioIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>(Ordenes_FindAllByUsuarioIdDocument, options);
      }
export function useOrdenes_FindAllByUsuarioIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>(Ordenes_FindAllByUsuarioIdDocument, options);
        }
export function useOrdenes_FindAllByUsuarioIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>(Ordenes_FindAllByUsuarioIdDocument, options);
        }
export type Ordenes_FindAllByUsuarioIdQueryHookResult = ReturnType<typeof useOrdenes_FindAllByUsuarioIdQuery>;
export type Ordenes_FindAllByUsuarioIdLazyQueryHookResult = ReturnType<typeof useOrdenes_FindAllByUsuarioIdLazyQuery>;
export type Ordenes_FindAllByUsuarioIdSuspenseQueryHookResult = ReturnType<typeof useOrdenes_FindAllByUsuarioIdSuspenseQuery>;
export type Ordenes_FindAllByUsuarioIdQueryResult = Apollo.QueryResult<Ordenes_FindAllByUsuarioIdQuery, Ordenes_FindAllByUsuarioIdQueryVariables>;
export const Ordenes_FindAllByCursoIdDocument = gql`
    query Ordenes_findAllByCursoId($idCurso: ID!) {
  Ordenes_findAllByCursoId(idCurso: $idCurso) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;

/**
 * __useOrdenes_FindAllByCursoIdQuery__
 *
 * To run a query within a React component, call `useOrdenes_FindAllByCursoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_FindAllByCursoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdenes_FindAllByCursoIdQuery({
 *   variables: {
 *      idCurso: // value for 'idCurso'
 *   },
 * });
 */
export function useOrdenes_FindAllByCursoIdQuery(baseOptions: Apollo.QueryHookOptions<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables> & ({ variables: Ordenes_FindAllByCursoIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>(Ordenes_FindAllByCursoIdDocument, options);
      }
export function useOrdenes_FindAllByCursoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>(Ordenes_FindAllByCursoIdDocument, options);
        }
export function useOrdenes_FindAllByCursoIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>(Ordenes_FindAllByCursoIdDocument, options);
        }
export type Ordenes_FindAllByCursoIdQueryHookResult = ReturnType<typeof useOrdenes_FindAllByCursoIdQuery>;
export type Ordenes_FindAllByCursoIdLazyQueryHookResult = ReturnType<typeof useOrdenes_FindAllByCursoIdLazyQuery>;
export type Ordenes_FindAllByCursoIdSuspenseQueryHookResult = ReturnType<typeof useOrdenes_FindAllByCursoIdSuspenseQuery>;
export type Ordenes_FindAllByCursoIdQueryResult = Apollo.QueryResult<Ordenes_FindAllByCursoIdQuery, Ordenes_FindAllByCursoIdQueryVariables>;
export const Ordenes_UpdateDocument = gql`
    mutation Ordenes_update($ordenesUpdateId: ID!, $updateCategoriaInput: UpdateOrdenInput!, $updateOrdenInput: UpdateOrdenInput!) {
  Ordenes_update(id: $ordenesUpdateId, updateOrdenInput: $updateOrdenInput) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_UpdateMutationFn = Apollo.MutationFunction<Ordenes_UpdateMutation, Ordenes_UpdateMutationVariables>;

/**
 * __useOrdenes_UpdateMutation__
 *
 * To run a mutation, you first call `useOrdenes_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesUpdateMutation, { data, loading, error }] = useOrdenes_UpdateMutation({
 *   variables: {
 *      ordenesUpdateId: // value for 'ordenesUpdateId'
 *      updateCategoriaInput: // value for 'updateCategoriaInput'
 *      updateOrdenInput: // value for 'updateOrdenInput'
 *   },
 * });
 */
export function useOrdenes_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_UpdateMutation, Ordenes_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_UpdateMutation, Ordenes_UpdateMutationVariables>(Ordenes_UpdateDocument, options);
      }
export type Ordenes_UpdateMutationHookResult = ReturnType<typeof useOrdenes_UpdateMutation>;
export type Ordenes_UpdateMutationResult = Apollo.MutationResult<Ordenes_UpdateMutation>;
export type Ordenes_UpdateMutationOptions = Apollo.BaseMutationOptions<Ordenes_UpdateMutation, Ordenes_UpdateMutationVariables>;
export const Ordenes_FindSoftDeletedDocument = gql`
    query Ordenes_findSoftDeleted {
  Ordenes_findSoftDeleted {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;

/**
 * __useOrdenes_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useOrdenes_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdenes_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdenes_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>(Ordenes_FindSoftDeletedDocument, options);
      }
export function useOrdenes_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>(Ordenes_FindSoftDeletedDocument, options);
        }
export function useOrdenes_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>(Ordenes_FindSoftDeletedDocument, options);
        }
export type Ordenes_FindSoftDeletedQueryHookResult = ReturnType<typeof useOrdenes_FindSoftDeletedQuery>;
export type Ordenes_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useOrdenes_FindSoftDeletedLazyQuery>;
export type Ordenes_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useOrdenes_FindSoftDeletedSuspenseQuery>;
export type Ordenes_FindSoftDeletedQueryResult = Apollo.QueryResult<Ordenes_FindSoftDeletedQuery, Ordenes_FindSoftDeletedQueryVariables>;
export const Ordenes_SoftDeleteDocument = gql`
    mutation Ordenes_softDelete($idRemove: ID!) {
  Ordenes_softDelete(idRemove: $idRemove) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_SoftDeleteMutationFn = Apollo.MutationFunction<Ordenes_SoftDeleteMutation, Ordenes_SoftDeleteMutationVariables>;

/**
 * __useOrdenes_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useOrdenes_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesSoftDeleteMutation, { data, loading, error }] = useOrdenes_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useOrdenes_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_SoftDeleteMutation, Ordenes_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_SoftDeleteMutation, Ordenes_SoftDeleteMutationVariables>(Ordenes_SoftDeleteDocument, options);
      }
export type Ordenes_SoftDeleteMutationHookResult = ReturnType<typeof useOrdenes_SoftDeleteMutation>;
export type Ordenes_SoftDeleteMutationResult = Apollo.MutationResult<Ordenes_SoftDeleteMutation>;
export type Ordenes_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Ordenes_SoftDeleteMutation, Ordenes_SoftDeleteMutationVariables>;
export const Ordenes_RestoreDocument = gql`
    mutation Ordenes_restore($idRestore: ID!) {
  Ordenes_restore(idRestore: $idRestore) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_RestoreMutationFn = Apollo.MutationFunction<Ordenes_RestoreMutation, Ordenes_RestoreMutationVariables>;

/**
 * __useOrdenes_RestoreMutation__
 *
 * To run a mutation, you first call `useOrdenes_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesRestoreMutation, { data, loading, error }] = useOrdenes_RestoreMutation({
 *   variables: {
 *      idRestore: // value for 'idRestore'
 *   },
 * });
 */
export function useOrdenes_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_RestoreMutation, Ordenes_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_RestoreMutation, Ordenes_RestoreMutationVariables>(Ordenes_RestoreDocument, options);
      }
export type Ordenes_RestoreMutationHookResult = ReturnType<typeof useOrdenes_RestoreMutation>;
export type Ordenes_RestoreMutationResult = Apollo.MutationResult<Ordenes_RestoreMutation>;
export type Ordenes_RestoreMutationOptions = Apollo.BaseMutationOptions<Ordenes_RestoreMutation, Ordenes_RestoreMutationVariables>;
export const Ordenes_HardDeleteDocument = gql`
    mutation Ordenes_hardDelete($ordenesHardDeleteId: ID!) {
  Ordenes_hardDelete(id: $ordenesHardDeleteId) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_HardDeleteMutationFn = Apollo.MutationFunction<Ordenes_HardDeleteMutation, Ordenes_HardDeleteMutationVariables>;

/**
 * __useOrdenes_HardDeleteMutation__
 *
 * To run a mutation, you first call `useOrdenes_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesHardDeleteMutation, { data, loading, error }] = useOrdenes_HardDeleteMutation({
 *   variables: {
 *      ordenesHardDeleteId: // value for 'ordenesHardDeleteId'
 *   },
 * });
 */
export function useOrdenes_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_HardDeleteMutation, Ordenes_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_HardDeleteMutation, Ordenes_HardDeleteMutationVariables>(Ordenes_HardDeleteDocument, options);
      }
export type Ordenes_HardDeleteMutationHookResult = ReturnType<typeof useOrdenes_HardDeleteMutation>;
export type Ordenes_HardDeleteMutationResult = Apollo.MutationResult<Ordenes_HardDeleteMutation>;
export type Ordenes_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Ordenes_HardDeleteMutation, Ordenes_HardDeleteMutationVariables>;
export const Ordenes_HardDeleteAllSoftDeletedDocument = gql`
    mutation Ordenes_hardDeleteAllSoftDeleted {
  Ordenes_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Ordenes_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Ordenes_HardDeleteAllSoftDeletedMutation, Ordenes_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useOrdenes_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useOrdenes_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useOrdenes_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useOrdenes_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_HardDeleteAllSoftDeletedMutation, Ordenes_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_HardDeleteAllSoftDeletedMutation, Ordenes_HardDeleteAllSoftDeletedMutationVariables>(Ordenes_HardDeleteAllSoftDeletedDocument, options);
      }
export type Ordenes_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useOrdenes_HardDeleteAllSoftDeletedMutation>;
export type Ordenes_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Ordenes_HardDeleteAllSoftDeletedMutation>;
export type Ordenes_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Ordenes_HardDeleteAllSoftDeletedMutation, Ordenes_HardDeleteAllSoftDeletedMutationVariables>;
export const Ordenes_PullCursoDocument = gql`
    mutation Ordenes_pullCurso($ordenId: ID!, $arrayCursosIds: [ID!]!) {
  Ordenes_pullCurso(ordenId: $ordenId, arrayCursosIds: $arrayCursosIds) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_PullCursoMutationFn = Apollo.MutationFunction<Ordenes_PullCursoMutation, Ordenes_PullCursoMutationVariables>;

/**
 * __useOrdenes_PullCursoMutation__
 *
 * To run a mutation, you first call `useOrdenes_PullCursoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_PullCursoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesPullCursoMutation, { data, loading, error }] = useOrdenes_PullCursoMutation({
 *   variables: {
 *      ordenId: // value for 'ordenId'
 *      arrayCursosIds: // value for 'arrayCursosIds'
 *   },
 * });
 */
export function useOrdenes_PullCursoMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_PullCursoMutation, Ordenes_PullCursoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_PullCursoMutation, Ordenes_PullCursoMutationVariables>(Ordenes_PullCursoDocument, options);
      }
export type Ordenes_PullCursoMutationHookResult = ReturnType<typeof useOrdenes_PullCursoMutation>;
export type Ordenes_PullCursoMutationResult = Apollo.MutationResult<Ordenes_PullCursoMutation>;
export type Ordenes_PullCursoMutationOptions = Apollo.BaseMutationOptions<Ordenes_PullCursoMutation, Ordenes_PullCursoMutationVariables>;
export const Ordenes_PushCursoDocument = gql`
    mutation Ordenes_pushCurso($ordenId: ID!, $arrayCursosIds: [ID!]!) {
  Ordenes_pushCurso(ordenId: $ordenId, arrayCursosIds: $arrayCursosIds) {
    _id
    usuarioId
    listaCursos {
      cursoId
      precio
      courseTitle
      descuento
    }
    montoTotal
    estado_orden
    deleted
  }
}
    `;
export type Ordenes_PushCursoMutationFn = Apollo.MutationFunction<Ordenes_PushCursoMutation, Ordenes_PushCursoMutationVariables>;

/**
 * __useOrdenes_PushCursoMutation__
 *
 * To run a mutation, you first call `useOrdenes_PushCursoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdenes_PushCursoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordenesPushCursoMutation, { data, loading, error }] = useOrdenes_PushCursoMutation({
 *   variables: {
 *      ordenId: // value for 'ordenId'
 *      arrayCursosIds: // value for 'arrayCursosIds'
 *   },
 * });
 */
export function useOrdenes_PushCursoMutation(baseOptions?: Apollo.MutationHookOptions<Ordenes_PushCursoMutation, Ordenes_PushCursoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Ordenes_PushCursoMutation, Ordenes_PushCursoMutationVariables>(Ordenes_PushCursoDocument, options);
      }
export type Ordenes_PushCursoMutationHookResult = ReturnType<typeof useOrdenes_PushCursoMutation>;
export type Ordenes_PushCursoMutationResult = Apollo.MutationResult<Ordenes_PushCursoMutation>;
export type Ordenes_PushCursoMutationOptions = Apollo.BaseMutationOptions<Ordenes_PushCursoMutation, Ordenes_PushCursoMutationVariables>;
export const Pregunta_UpdateDocument = gql`
    mutation Pregunta_update($idCuestionario: ID!, $idPregunta: ID!, $updatePreguntaInput: UpdatePreguntaInput!) {
  Pregunta_update(
    idCuestionario: $idCuestionario
    idPregunta: $idPregunta
    updatePreguntaInput: $updatePreguntaInput
  ) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_UpdateMutationFn = Apollo.MutationFunction<Pregunta_UpdateMutation, Pregunta_UpdateMutationVariables>;

/**
 * __usePregunta_UpdateMutation__
 *
 * To run a mutation, you first call `usePregunta_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaUpdateMutation, { data, loading, error }] = usePregunta_UpdateMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *      updatePreguntaInput: // value for 'updatePreguntaInput'
 *   },
 * });
 */
export function usePregunta_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_UpdateMutation, Pregunta_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_UpdateMutation, Pregunta_UpdateMutationVariables>(Pregunta_UpdateDocument, options);
      }
export type Pregunta_UpdateMutationHookResult = ReturnType<typeof usePregunta_UpdateMutation>;
export type Pregunta_UpdateMutationResult = Apollo.MutationResult<Pregunta_UpdateMutation>;
export type Pregunta_UpdateMutationOptions = Apollo.BaseMutationOptions<Pregunta_UpdateMutation, Pregunta_UpdateMutationVariables>;
export const PreguntasDocument = gql`
    query Preguntas($idCuestionario: ID!) {
  Preguntas(idCuestionario: $idCuestionario) {
    enunciado
    tipoPregunta
    moduloId
    unidadId
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    deleted
    _id
  }
}
    `;

/**
 * __usePreguntasQuery__
 *
 * To run a query within a React component, call `usePreguntasQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreguntasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreguntasQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *   },
 * });
 */
export function usePreguntasQuery(baseOptions: Apollo.QueryHookOptions<PreguntasQuery, PreguntasQueryVariables> & ({ variables: PreguntasQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PreguntasQuery, PreguntasQueryVariables>(PreguntasDocument, options);
      }
export function usePreguntasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreguntasQuery, PreguntasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PreguntasQuery, PreguntasQueryVariables>(PreguntasDocument, options);
        }
export function usePreguntasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PreguntasQuery, PreguntasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PreguntasQuery, PreguntasQueryVariables>(PreguntasDocument, options);
        }
export type PreguntasQueryHookResult = ReturnType<typeof usePreguntasQuery>;
export type PreguntasLazyQueryHookResult = ReturnType<typeof usePreguntasLazyQuery>;
export type PreguntasSuspenseQueryHookResult = ReturnType<typeof usePreguntasSuspenseQuery>;
export type PreguntasQueryResult = Apollo.QueryResult<PreguntasQuery, PreguntasQueryVariables>;
export const Pregunta_SoftDeleteDocument = gql`
    mutation Pregunta_softDelete($idCuestionario: ID!, $idPregunta: ID!) {
  Pregunta_softDelete(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_SoftDeleteMutationFn = Apollo.MutationFunction<Pregunta_SoftDeleteMutation, Pregunta_SoftDeleteMutationVariables>;

/**
 * __usePregunta_SoftDeleteMutation__
 *
 * To run a mutation, you first call `usePregunta_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaSoftDeleteMutation, { data, loading, error }] = usePregunta_SoftDeleteMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function usePregunta_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_SoftDeleteMutation, Pregunta_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_SoftDeleteMutation, Pregunta_SoftDeleteMutationVariables>(Pregunta_SoftDeleteDocument, options);
      }
export type Pregunta_SoftDeleteMutationHookResult = ReturnType<typeof usePregunta_SoftDeleteMutation>;
export type Pregunta_SoftDeleteMutationResult = Apollo.MutationResult<Pregunta_SoftDeleteMutation>;
export type Pregunta_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Pregunta_SoftDeleteMutation, Pregunta_SoftDeleteMutationVariables>;
export const Pregunta_RestoreDocument = gql`
    mutation Pregunta_restore($idCuestionario: ID!, $idPregunta: ID!) {
  Pregunta_restore(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_RestoreMutationFn = Apollo.MutationFunction<Pregunta_RestoreMutation, Pregunta_RestoreMutationVariables>;

/**
 * __usePregunta_RestoreMutation__
 *
 * To run a mutation, you first call `usePregunta_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaRestoreMutation, { data, loading, error }] = usePregunta_RestoreMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function usePregunta_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_RestoreMutation, Pregunta_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_RestoreMutation, Pregunta_RestoreMutationVariables>(Pregunta_RestoreDocument, options);
      }
export type Pregunta_RestoreMutationHookResult = ReturnType<typeof usePregunta_RestoreMutation>;
export type Pregunta_RestoreMutationResult = Apollo.MutationResult<Pregunta_RestoreMutation>;
export type Pregunta_RestoreMutationOptions = Apollo.BaseMutationOptions<Pregunta_RestoreMutation, Pregunta_RestoreMutationVariables>;
export const Pregunta_HardDeleteAllSoftDeletedDocument = gql`
    mutation Pregunta_hardDeleteAllSoftDeleted($idCuestionario: ID!) {
  Pregunta_hardDeleteAllSoftDeleted(idCuestionario: $idCuestionario) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Pregunta_HardDeleteAllSoftDeletedMutation, Pregunta_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __usePregunta_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `usePregunta_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaHardDeleteAllSoftDeletedMutation, { data, loading, error }] = usePregunta_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *   },
 * });
 */
export function usePregunta_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_HardDeleteAllSoftDeletedMutation, Pregunta_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_HardDeleteAllSoftDeletedMutation, Pregunta_HardDeleteAllSoftDeletedMutationVariables>(Pregunta_HardDeleteAllSoftDeletedDocument, options);
      }
export type Pregunta_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof usePregunta_HardDeleteAllSoftDeletedMutation>;
export type Pregunta_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Pregunta_HardDeleteAllSoftDeletedMutation>;
export type Pregunta_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Pregunta_HardDeleteAllSoftDeletedMutation, Pregunta_HardDeleteAllSoftDeletedMutationVariables>;
export const Pregunta_HardDeleteDocument = gql`
    mutation Pregunta_hardDelete($idCuestionario: ID!, $idPregunta: ID!) {
  Pregunta_hardDelete(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_HardDeleteMutationFn = Apollo.MutationFunction<Pregunta_HardDeleteMutation, Pregunta_HardDeleteMutationVariables>;

/**
 * __usePregunta_HardDeleteMutation__
 *
 * To run a mutation, you first call `usePregunta_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaHardDeleteMutation, { data, loading, error }] = usePregunta_HardDeleteMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function usePregunta_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_HardDeleteMutation, Pregunta_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_HardDeleteMutation, Pregunta_HardDeleteMutationVariables>(Pregunta_HardDeleteDocument, options);
      }
export type Pregunta_HardDeleteMutationHookResult = ReturnType<typeof usePregunta_HardDeleteMutation>;
export type Pregunta_HardDeleteMutationResult = Apollo.MutationResult<Pregunta_HardDeleteMutation>;
export type Pregunta_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Pregunta_HardDeleteMutation, Pregunta_HardDeleteMutationVariables>;
export const Pregunta_CreateDocument = gql`
    mutation Pregunta_create($idCuestionario: ID!, $createPreguntaInput: CreatePreguntaInput!) {
  Pregunta_create(
    idCuestionario: $idCuestionario
    createPreguntaInput: $createPreguntaInput
  ) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;
export type Pregunta_CreateMutationFn = Apollo.MutationFunction<Pregunta_CreateMutation, Pregunta_CreateMutationVariables>;

/**
 * __usePregunta_CreateMutation__
 *
 * To run a mutation, you first call `usePregunta_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePregunta_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preguntaCreateMutation, { data, loading, error }] = usePregunta_CreateMutation({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      createPreguntaInput: // value for 'createPreguntaInput'
 *   },
 * });
 */
export function usePregunta_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Pregunta_CreateMutation, Pregunta_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Pregunta_CreateMutation, Pregunta_CreateMutationVariables>(Pregunta_CreateDocument, options);
      }
export type Pregunta_CreateMutationHookResult = ReturnType<typeof usePregunta_CreateMutation>;
export type Pregunta_CreateMutationResult = Apollo.MutationResult<Pregunta_CreateMutation>;
export type Pregunta_CreateMutationOptions = Apollo.BaseMutationOptions<Pregunta_CreateMutation, Pregunta_CreateMutationVariables>;
export const Pregunta_FindSoftDeletedDocument = gql`
    query Pregunta_findSoftDeleted($idCuestionario: ID!) {
  Pregunta_findSoftDeleted(idCuestionario: $idCuestionario) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;

/**
 * __usePregunta_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `usePregunta_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePregunta_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePregunta_FindSoftDeletedQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *   },
 * });
 */
export function usePregunta_FindSoftDeletedQuery(baseOptions: Apollo.QueryHookOptions<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables> & ({ variables: Pregunta_FindSoftDeletedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>(Pregunta_FindSoftDeletedDocument, options);
      }
export function usePregunta_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>(Pregunta_FindSoftDeletedDocument, options);
        }
export function usePregunta_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>(Pregunta_FindSoftDeletedDocument, options);
        }
export type Pregunta_FindSoftDeletedQueryHookResult = ReturnType<typeof usePregunta_FindSoftDeletedQuery>;
export type Pregunta_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof usePregunta_FindSoftDeletedLazyQuery>;
export type Pregunta_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof usePregunta_FindSoftDeletedSuspenseQuery>;
export type Pregunta_FindSoftDeletedQueryResult = Apollo.QueryResult<Pregunta_FindSoftDeletedQuery, Pregunta_FindSoftDeletedQueryVariables>;
export const PreguntaDocument = gql`
    query Pregunta($idCuestionario: ID!, $idPregunta: ID!) {
  Pregunta(idCuestionario: $idCuestionario, idPregunta: $idPregunta) {
    _id
    enunciado
    tipoPregunta
    opciones {
      _id
      textOpcion
      esCorrecta
      orden
      deleted
    }
    moduloId
    unidadId
    deleted
  }
}
    `;

/**
 * __usePreguntaQuery__
 *
 * To run a query within a React component, call `usePreguntaQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreguntaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreguntaQuery({
 *   variables: {
 *      idCuestionario: // value for 'idCuestionario'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function usePreguntaQuery(baseOptions: Apollo.QueryHookOptions<PreguntaQuery, PreguntaQueryVariables> & ({ variables: PreguntaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PreguntaQuery, PreguntaQueryVariables>(PreguntaDocument, options);
      }
export function usePreguntaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreguntaQuery, PreguntaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PreguntaQuery, PreguntaQueryVariables>(PreguntaDocument, options);
        }
export function usePreguntaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PreguntaQuery, PreguntaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PreguntaQuery, PreguntaQueryVariables>(PreguntaDocument, options);
        }
export type PreguntaQueryHookResult = ReturnType<typeof usePreguntaQuery>;
export type PreguntaLazyQueryHookResult = ReturnType<typeof usePreguntaLazyQuery>;
export type PreguntaSuspenseQueryHookResult = ReturnType<typeof usePreguntaSuspenseQuery>;
export type PreguntaQueryResult = Apollo.QueryResult<PreguntaQuery, PreguntaQueryVariables>;
export const RespuestaCuestionario_CreateDocument = gql`
    mutation RespuestaCuestionario_create($createRespuestaCuestionarioInput: CreateRespuestaCuestionarioInput!) {
  RespuestaCuestionario_create(
    createRespuestaCuestionarioInput: $createRespuestaCuestionarioInput
  ) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;
export type RespuestaCuestionario_CreateMutationFn = Apollo.MutationFunction<RespuestaCuestionario_CreateMutation, RespuestaCuestionario_CreateMutationVariables>;

/**
 * __useRespuestaCuestionario_CreateMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioCreateMutation, { data, loading, error }] = useRespuestaCuestionario_CreateMutation({
 *   variables: {
 *      createRespuestaCuestionarioInput: // value for 'createRespuestaCuestionarioInput'
 *   },
 * });
 */
export function useRespuestaCuestionario_CreateMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_CreateMutation, RespuestaCuestionario_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_CreateMutation, RespuestaCuestionario_CreateMutationVariables>(RespuestaCuestionario_CreateDocument, options);
      }
export type RespuestaCuestionario_CreateMutationHookResult = ReturnType<typeof useRespuestaCuestionario_CreateMutation>;
export type RespuestaCuestionario_CreateMutationResult = Apollo.MutationResult<RespuestaCuestionario_CreateMutation>;
export type RespuestaCuestionario_CreateMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_CreateMutation, RespuestaCuestionario_CreateMutationVariables>;
export const RespuestaCuestionariosDocument = gql`
    query RespuestaCuestionarios {
  RespuestaCuestionarios {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;

/**
 * __useRespuestaCuestionariosQuery__
 *
 * To run a query within a React component, call `useRespuestaCuestionariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaCuestionariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useRespuestaCuestionariosQuery(baseOptions?: Apollo.QueryHookOptions<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>(RespuestaCuestionariosDocument, options);
      }
export function useRespuestaCuestionariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>(RespuestaCuestionariosDocument, options);
        }
export function useRespuestaCuestionariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>(RespuestaCuestionariosDocument, options);
        }
export type RespuestaCuestionariosQueryHookResult = ReturnType<typeof useRespuestaCuestionariosQuery>;
export type RespuestaCuestionariosLazyQueryHookResult = ReturnType<typeof useRespuestaCuestionariosLazyQuery>;
export type RespuestaCuestionariosSuspenseQueryHookResult = ReturnType<typeof useRespuestaCuestionariosSuspenseQuery>;
export type RespuestaCuestionariosQueryResult = Apollo.QueryResult<RespuestaCuestionariosQuery, RespuestaCuestionariosQueryVariables>;
export const RespuestaCuestionarioDocument = gql`
    query RespuestaCuestionario($respuestaCuestionarioId: ID!) {
  RespuestaCuestionario(respuestaCuestionarioId: $respuestaCuestionarioId) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        orden
        textOpcion
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;

/**
 * __useRespuestaCuestionarioQuery__
 *
 * To run a query within a React component, call `useRespuestaCuestionarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaCuestionarioQuery({
 *   variables: {
 *      respuestaCuestionarioId: // value for 'respuestaCuestionarioId'
 *   },
 * });
 */
export function useRespuestaCuestionarioQuery(baseOptions: Apollo.QueryHookOptions<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables> & ({ variables: RespuestaCuestionarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>(RespuestaCuestionarioDocument, options);
      }
export function useRespuestaCuestionarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>(RespuestaCuestionarioDocument, options);
        }
export function useRespuestaCuestionarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>(RespuestaCuestionarioDocument, options);
        }
export type RespuestaCuestionarioQueryHookResult = ReturnType<typeof useRespuestaCuestionarioQuery>;
export type RespuestaCuestionarioLazyQueryHookResult = ReturnType<typeof useRespuestaCuestionarioLazyQuery>;
export type RespuestaCuestionarioSuspenseQueryHookResult = ReturnType<typeof useRespuestaCuestionarioSuspenseQuery>;
export type RespuestaCuestionarioQueryResult = Apollo.QueryResult<RespuestaCuestionarioQuery, RespuestaCuestionarioQueryVariables>;
export const RespuestaCuestionario_ByCursoIdDocument = gql`
    query RespuestaCuestionario_byCursoID($cursoId: ID!) {
  RespuestaCuestionario_byCursoId(cursoId: $cursoId) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;

/**
 * __useRespuestaCuestionario_ByCursoIdQuery__
 *
 * To run a query within a React component, call `useRespuestaCuestionario_ByCursoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_ByCursoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaCuestionario_ByCursoIdQuery({
 *   variables: {
 *      cursoId: // value for 'cursoId'
 *   },
 * });
 */
export function useRespuestaCuestionario_ByCursoIdQuery(baseOptions: Apollo.QueryHookOptions<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables> & ({ variables: RespuestaCuestionario_ByCursoIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>(RespuestaCuestionario_ByCursoIdDocument, options);
      }
export function useRespuestaCuestionario_ByCursoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>(RespuestaCuestionario_ByCursoIdDocument, options);
        }
export function useRespuestaCuestionario_ByCursoIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>(RespuestaCuestionario_ByCursoIdDocument, options);
        }
export type RespuestaCuestionario_ByCursoIdQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByCursoIdQuery>;
export type RespuestaCuestionario_ByCursoIdLazyQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByCursoIdLazyQuery>;
export type RespuestaCuestionario_ByCursoIdSuspenseQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByCursoIdSuspenseQuery>;
export type RespuestaCuestionario_ByCursoIdQueryResult = Apollo.QueryResult<RespuestaCuestionario_ByCursoIdQuery, RespuestaCuestionario_ByCursoIdQueryVariables>;
export const RespuestaCuestionario_ByUsuarioIdDocument = gql`
    query RespuestaCuestionario_byUsuarioId($usuarioId: ID!) {
  RespuestaCuestionario_byUsuarioId(usuarioId: $usuarioId) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;

/**
 * __useRespuestaCuestionario_ByUsuarioIdQuery__
 *
 * To run a query within a React component, call `useRespuestaCuestionario_ByUsuarioIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_ByUsuarioIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaCuestionario_ByUsuarioIdQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useRespuestaCuestionario_ByUsuarioIdQuery(baseOptions: Apollo.QueryHookOptions<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables> & ({ variables: RespuestaCuestionario_ByUsuarioIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>(RespuestaCuestionario_ByUsuarioIdDocument, options);
      }
export function useRespuestaCuestionario_ByUsuarioIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>(RespuestaCuestionario_ByUsuarioIdDocument, options);
        }
export function useRespuestaCuestionario_ByUsuarioIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>(RespuestaCuestionario_ByUsuarioIdDocument, options);
        }
export type RespuestaCuestionario_ByUsuarioIdQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByUsuarioIdQuery>;
export type RespuestaCuestionario_ByUsuarioIdLazyQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByUsuarioIdLazyQuery>;
export type RespuestaCuestionario_ByUsuarioIdSuspenseQueryHookResult = ReturnType<typeof useRespuestaCuestionario_ByUsuarioIdSuspenseQuery>;
export type RespuestaCuestionario_ByUsuarioIdQueryResult = Apollo.QueryResult<RespuestaCuestionario_ByUsuarioIdQuery, RespuestaCuestionario_ByUsuarioIdQueryVariables>;
export const RespuestaCuestionario_FindSoftDeletedDocument = gql`
    query RespuestaCuestionario_findSoftDeleted {
  RespuestaCuestionario_findSoftDeleted {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;

/**
 * __useRespuestaCuestionario_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useRespuestaCuestionario_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaCuestionario_FindSoftDeletedQuery({
 *   variables: {
 *   },
 * });
 */
export function useRespuestaCuestionario_FindSoftDeletedQuery(baseOptions?: Apollo.QueryHookOptions<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>(RespuestaCuestionario_FindSoftDeletedDocument, options);
      }
export function useRespuestaCuestionario_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>(RespuestaCuestionario_FindSoftDeletedDocument, options);
        }
export function useRespuestaCuestionario_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>(RespuestaCuestionario_FindSoftDeletedDocument, options);
        }
export type RespuestaCuestionario_FindSoftDeletedQueryHookResult = ReturnType<typeof useRespuestaCuestionario_FindSoftDeletedQuery>;
export type RespuestaCuestionario_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useRespuestaCuestionario_FindSoftDeletedLazyQuery>;
export type RespuestaCuestionario_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useRespuestaCuestionario_FindSoftDeletedSuspenseQuery>;
export type RespuestaCuestionario_FindSoftDeletedQueryResult = Apollo.QueryResult<RespuestaCuestionario_FindSoftDeletedQuery, RespuestaCuestionario_FindSoftDeletedQueryVariables>;
export const RespuestaCuestionario_SoftDeleteDocument = gql`
    mutation RespuestaCuestionario_softDelete($respuestaCuestionarioId: ID!) {
  RespuestaCuestionario_softDelete(
    respuestaCuestionarioId: $respuestaCuestionarioId
  ) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;
export type RespuestaCuestionario_SoftDeleteMutationFn = Apollo.MutationFunction<RespuestaCuestionario_SoftDeleteMutation, RespuestaCuestionario_SoftDeleteMutationVariables>;

/**
 * __useRespuestaCuestionario_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioSoftDeleteMutation, { data, loading, error }] = useRespuestaCuestionario_SoftDeleteMutation({
 *   variables: {
 *      respuestaCuestionarioId: // value for 'respuestaCuestionarioId'
 *   },
 * });
 */
export function useRespuestaCuestionario_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_SoftDeleteMutation, RespuestaCuestionario_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_SoftDeleteMutation, RespuestaCuestionario_SoftDeleteMutationVariables>(RespuestaCuestionario_SoftDeleteDocument, options);
      }
export type RespuestaCuestionario_SoftDeleteMutationHookResult = ReturnType<typeof useRespuestaCuestionario_SoftDeleteMutation>;
export type RespuestaCuestionario_SoftDeleteMutationResult = Apollo.MutationResult<RespuestaCuestionario_SoftDeleteMutation>;
export type RespuestaCuestionario_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_SoftDeleteMutation, RespuestaCuestionario_SoftDeleteMutationVariables>;
export const RespuestaCuestionario_RestoreDocument = gql`
    mutation RespuestaCuestionario_restore($respuestaCuestionarioId: ID!) {
  RespuestaCuestionario_restore(respuestaCuestionarioId: $respuestaCuestionarioId) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;
export type RespuestaCuestionario_RestoreMutationFn = Apollo.MutationFunction<RespuestaCuestionario_RestoreMutation, RespuestaCuestionario_RestoreMutationVariables>;

/**
 * __useRespuestaCuestionario_RestoreMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioRestoreMutation, { data, loading, error }] = useRespuestaCuestionario_RestoreMutation({
 *   variables: {
 *      respuestaCuestionarioId: // value for 'respuestaCuestionarioId'
 *   },
 * });
 */
export function useRespuestaCuestionario_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_RestoreMutation, RespuestaCuestionario_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_RestoreMutation, RespuestaCuestionario_RestoreMutationVariables>(RespuestaCuestionario_RestoreDocument, options);
      }
export type RespuestaCuestionario_RestoreMutationHookResult = ReturnType<typeof useRespuestaCuestionario_RestoreMutation>;
export type RespuestaCuestionario_RestoreMutationResult = Apollo.MutationResult<RespuestaCuestionario_RestoreMutation>;
export type RespuestaCuestionario_RestoreMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_RestoreMutation, RespuestaCuestionario_RestoreMutationVariables>;
export const RespuestaCuestionario_UpdateDocument = gql`
    mutation RespuestaCuestionario_update($updateCuestionarioInput: UpdateRespuestaCuestionarioInput!, $respuestaCuestionarioUpdateId: ID!) {
  RespuestaCuestionario_update(
    updateRespuestaCuestionarioInput: $updateCuestionarioInput
    respuestaCuestionarioUpdateId: $respuestaCuestionarioUpdateId
  ) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;
export type RespuestaCuestionario_UpdateMutationFn = Apollo.MutationFunction<RespuestaCuestionario_UpdateMutation, RespuestaCuestionario_UpdateMutationVariables>;

/**
 * __useRespuestaCuestionario_UpdateMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioUpdateMutation, { data, loading, error }] = useRespuestaCuestionario_UpdateMutation({
 *   variables: {
 *      updateCuestionarioInput: // value for 'updateCuestionarioInput'
 *      respuestaCuestionarioUpdateId: // value for 'respuestaCuestionarioUpdateId'
 *   },
 * });
 */
export function useRespuestaCuestionario_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_UpdateMutation, RespuestaCuestionario_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_UpdateMutation, RespuestaCuestionario_UpdateMutationVariables>(RespuestaCuestionario_UpdateDocument, options);
      }
export type RespuestaCuestionario_UpdateMutationHookResult = ReturnType<typeof useRespuestaCuestionario_UpdateMutation>;
export type RespuestaCuestionario_UpdateMutationResult = Apollo.MutationResult<RespuestaCuestionario_UpdateMutation>;
export type RespuestaCuestionario_UpdateMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_UpdateMutation, RespuestaCuestionario_UpdateMutationVariables>;
export const RespuestaCuestionario_HardDeleteDocument = gql`
    mutation RespuestaCuestionario_hardDelete($respuestaCuestionarioId: ID!) {
  RespuestaCuestionario_hardDelete(
    respuestaCuestionarioId: $respuestaCuestionarioId
  ) {
    _id
    usuarioId
    cursoId
    cuestionarioId
    respuestas {
      _id
      preguntaId
      respuestaId {
        _id
        textOpcion
        orden
      }
      respuestaAbierta
      deleted
    }
    fecha
    nota
    estado
    deleted
  }
}
    `;
export type RespuestaCuestionario_HardDeleteMutationFn = Apollo.MutationFunction<RespuestaCuestionario_HardDeleteMutation, RespuestaCuestionario_HardDeleteMutationVariables>;

/**
 * __useRespuestaCuestionario_HardDeleteMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioHardDeleteMutation, { data, loading, error }] = useRespuestaCuestionario_HardDeleteMutation({
 *   variables: {
 *      respuestaCuestionarioId: // value for 'respuestaCuestionarioId'
 *   },
 * });
 */
export function useRespuestaCuestionario_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_HardDeleteMutation, RespuestaCuestionario_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_HardDeleteMutation, RespuestaCuestionario_HardDeleteMutationVariables>(RespuestaCuestionario_HardDeleteDocument, options);
      }
export type RespuestaCuestionario_HardDeleteMutationHookResult = ReturnType<typeof useRespuestaCuestionario_HardDeleteMutation>;
export type RespuestaCuestionario_HardDeleteMutationResult = Apollo.MutationResult<RespuestaCuestionario_HardDeleteMutation>;
export type RespuestaCuestionario_HardDeleteMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_HardDeleteMutation, RespuestaCuestionario_HardDeleteMutationVariables>;
export const RespuestaCuestionario_HardDeleteAllSoftDeletedDocument = gql`
    mutation RespuestaCuestionario_hardDeleteAllSoftDeleted {
  RespuestaCuestionario_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<RespuestaCuestionario_HardDeleteAllSoftDeletedMutation, RespuestaCuestionario_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_HardDeleteAllSoftDeletedMutation, RespuestaCuestionario_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_HardDeleteAllSoftDeletedMutation, RespuestaCuestionario_HardDeleteAllSoftDeletedMutationVariables>(RespuestaCuestionario_HardDeleteAllSoftDeletedDocument, options);
      }
export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useRespuestaCuestionario_HardDeleteAllSoftDeletedMutation>;
export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<RespuestaCuestionario_HardDeleteAllSoftDeletedMutation>;
export type RespuestaCuestionario_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_HardDeleteAllSoftDeletedMutation, RespuestaCuestionario_HardDeleteAllSoftDeletedMutationVariables>;
export const RespuestaCuestionario_CalcularNotaDocument = gql`
    mutation RespuestaCuestionario_calcularNota($idRespuestaCuestionario: ID!) {
  RespuestaCuestionario_calcularNota(
    idRespuestaCuestionario: $idRespuestaCuestionario
  )
}
    `;
export type RespuestaCuestionario_CalcularNotaMutationFn = Apollo.MutationFunction<RespuestaCuestionario_CalcularNotaMutation, RespuestaCuestionario_CalcularNotaMutationVariables>;

/**
 * __useRespuestaCuestionario_CalcularNotaMutation__
 *
 * To run a mutation, you first call `useRespuestaCuestionario_CalcularNotaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaCuestionario_CalcularNotaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaCuestionarioCalcularNotaMutation, { data, loading, error }] = useRespuestaCuestionario_CalcularNotaMutation({
 *   variables: {
 *      idRespuestaCuestionario: // value for 'idRespuestaCuestionario'
 *   },
 * });
 */
export function useRespuestaCuestionario_CalcularNotaMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaCuestionario_CalcularNotaMutation, RespuestaCuestionario_CalcularNotaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaCuestionario_CalcularNotaMutation, RespuestaCuestionario_CalcularNotaMutationVariables>(RespuestaCuestionario_CalcularNotaDocument, options);
      }
export type RespuestaCuestionario_CalcularNotaMutationHookResult = ReturnType<typeof useRespuestaCuestionario_CalcularNotaMutation>;
export type RespuestaCuestionario_CalcularNotaMutationResult = Apollo.MutationResult<RespuestaCuestionario_CalcularNotaMutation>;
export type RespuestaCuestionario_CalcularNotaMutationOptions = Apollo.BaseMutationOptions<RespuestaCuestionario_CalcularNotaMutation, RespuestaCuestionario_CalcularNotaMutationVariables>;
export const RespuestaPregunta_CreateDocument = gql`
    mutation RespuestaPregunta_create($idCurso: ID!, $createRespuestaPreguntaResolverInput: CreateRespuestaPregunta_ResolverInput!) {
  RespuestaPregunta_create(
    idCurso: $idCurso
    createRespuestaPregunta_ResolverInput: $createRespuestaPreguntaResolverInput
  ) {
    _id
    preguntaId
    respuestaId {
      _id
      textOpcion
      orden
    }
    respuestaAbierta
    deleted
  }
}
    `;
export type RespuestaPregunta_CreateMutationFn = Apollo.MutationFunction<RespuestaPregunta_CreateMutation, RespuestaPregunta_CreateMutationVariables>;

/**
 * __useRespuestaPregunta_CreateMutation__
 *
 * To run a mutation, you first call `useRespuestaPregunta_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespuestaPregunta_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respuestaPreguntaCreateMutation, { data, loading, error }] = useRespuestaPregunta_CreateMutation({
 *   variables: {
 *      idCurso: // value for 'idCurso'
 *      createRespuestaPreguntaResolverInput: // value for 'createRespuestaPreguntaResolverInput'
 *   },
 * });
 */
export function useRespuestaPregunta_CreateMutation(baseOptions?: Apollo.MutationHookOptions<RespuestaPregunta_CreateMutation, RespuestaPregunta_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RespuestaPregunta_CreateMutation, RespuestaPregunta_CreateMutationVariables>(RespuestaPregunta_CreateDocument, options);
      }
export type RespuestaPregunta_CreateMutationHookResult = ReturnType<typeof useRespuestaPregunta_CreateMutation>;
export type RespuestaPregunta_CreateMutationResult = Apollo.MutationResult<RespuestaPregunta_CreateMutation>;
export type RespuestaPregunta_CreateMutationOptions = Apollo.BaseMutationOptions<RespuestaPregunta_CreateMutation, RespuestaPregunta_CreateMutationVariables>;
export const RespuestaPreguntaDocument = gql`
    query RespuestaPregunta($idCurso: ID!, $idPregunta: ID!) {
  RespuestaPregunta(idCurso: $idCurso, idPregunta: $idPregunta) {
    _id
    preguntaId
    respuestaId {
      _id
      textOpcion
      orden
    }
    respuestaAbierta
    deleted
  }
}
    `;

/**
 * __useRespuestaPreguntaQuery__
 *
 * To run a query within a React component, call `useRespuestaPreguntaQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaPreguntaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaPreguntaQuery({
 *   variables: {
 *      idCurso: // value for 'idCurso'
 *      idPregunta: // value for 'idPregunta'
 *   },
 * });
 */
export function useRespuestaPreguntaQuery(baseOptions: Apollo.QueryHookOptions<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables> & ({ variables: RespuestaPreguntaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>(RespuestaPreguntaDocument, options);
      }
export function useRespuestaPreguntaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>(RespuestaPreguntaDocument, options);
        }
export function useRespuestaPreguntaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>(RespuestaPreguntaDocument, options);
        }
export type RespuestaPreguntaQueryHookResult = ReturnType<typeof useRespuestaPreguntaQuery>;
export type RespuestaPreguntaLazyQueryHookResult = ReturnType<typeof useRespuestaPreguntaLazyQuery>;
export type RespuestaPreguntaSuspenseQueryHookResult = ReturnType<typeof useRespuestaPreguntaSuspenseQuery>;
export type RespuestaPreguntaQueryResult = Apollo.QueryResult<RespuestaPreguntaQuery, RespuestaPreguntaQueryVariables>;
export const RespuestaPreguntasDocument = gql`
    query RespuestaPreguntas($idRespuestaCuestionario: ID!) {
  RespuestaPreguntas(idRespuestaCuestionario: $idRespuestaCuestionario) {
    _id
    preguntaId
    respuestaId {
      _id
      textOpcion
      orden
    }
    respuestaAbierta
    deleted
  }
}
    `;

/**
 * __useRespuestaPreguntasQuery__
 *
 * To run a query within a React component, call `useRespuestaPreguntasQuery` and pass it any options that fit your needs.
 * When your component renders, `useRespuestaPreguntasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRespuestaPreguntasQuery({
 *   variables: {
 *      idRespuestaCuestionario: // value for 'idRespuestaCuestionario'
 *   },
 * });
 */
export function useRespuestaPreguntasQuery(baseOptions: Apollo.QueryHookOptions<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables> & ({ variables: RespuestaPreguntasQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>(RespuestaPreguntasDocument, options);
      }
export function useRespuestaPreguntasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>(RespuestaPreguntasDocument, options);
        }
export function useRespuestaPreguntasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>(RespuestaPreguntasDocument, options);
        }
export type RespuestaPreguntasQueryHookResult = ReturnType<typeof useRespuestaPreguntasQuery>;
export type RespuestaPreguntasLazyQueryHookResult = ReturnType<typeof useRespuestaPreguntasLazyQuery>;
export type RespuestaPreguntasSuspenseQueryHookResult = ReturnType<typeof useRespuestaPreguntasSuspenseQuery>;
export type RespuestaPreguntasQueryResult = Apollo.QueryResult<RespuestaPreguntasQuery, RespuestaPreguntasQueryVariables>;
export const Unidad_CreateDocument = gql`
    mutation Unidad_create($idModulo: ID!, $createUnidadInput: CreateUnidadInput!) {
  Unidad_create(idModulo: $idModulo, createUnidadInput: $createUnidadInput) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_CreateMutationFn = Apollo.MutationFunction<Unidad_CreateMutation, Unidad_CreateMutationVariables>;

/**
 * __useUnidad_CreateMutation__
 *
 * To run a mutation, you first call `useUnidad_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadCreateMutation, { data, loading, error }] = useUnidad_CreateMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      createUnidadInput: // value for 'createUnidadInput'
 *   },
 * });
 */
export function useUnidad_CreateMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_CreateMutation, Unidad_CreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_CreateMutation, Unidad_CreateMutationVariables>(Unidad_CreateDocument, options);
      }
export type Unidad_CreateMutationHookResult = ReturnType<typeof useUnidad_CreateMutation>;
export type Unidad_CreateMutationResult = Apollo.MutationResult<Unidad_CreateMutation>;
export type Unidad_CreateMutationOptions = Apollo.BaseMutationOptions<Unidad_CreateMutation, Unidad_CreateMutationVariables>;
export const UnidadesDocument = gql`
    query Unidades($idModulo: ID!) {
  Unidades(idModulo: $idModulo) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;

/**
 * __useUnidadesQuery__
 *
 * To run a query within a React component, call `useUnidadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnidadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnidadesQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *   },
 * });
 */
export function useUnidadesQuery(baseOptions: Apollo.QueryHookOptions<UnidadesQuery, UnidadesQueryVariables> & ({ variables: UnidadesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnidadesQuery, UnidadesQueryVariables>(UnidadesDocument, options);
      }
export function useUnidadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnidadesQuery, UnidadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnidadesQuery, UnidadesQueryVariables>(UnidadesDocument, options);
        }
export function useUnidadesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UnidadesQuery, UnidadesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UnidadesQuery, UnidadesQueryVariables>(UnidadesDocument, options);
        }
export type UnidadesQueryHookResult = ReturnType<typeof useUnidadesQuery>;
export type UnidadesLazyQueryHookResult = ReturnType<typeof useUnidadesLazyQuery>;
export type UnidadesSuspenseQueryHookResult = ReturnType<typeof useUnidadesSuspenseQuery>;
export type UnidadesQueryResult = Apollo.QueryResult<UnidadesQuery, UnidadesQueryVariables>;
export const UnidadDocument = gql`
    query Unidad($idModulo: ID!, $idUnidad: ID!) {
  Unidad(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;

/**
 * __useUnidadQuery__
 *
 * To run a query within a React component, call `useUnidadQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnidadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnidadQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useUnidadQuery(baseOptions: Apollo.QueryHookOptions<UnidadQuery, UnidadQueryVariables> & ({ variables: UnidadQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnidadQuery, UnidadQueryVariables>(UnidadDocument, options);
      }
export function useUnidadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnidadQuery, UnidadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnidadQuery, UnidadQueryVariables>(UnidadDocument, options);
        }
export function useUnidadSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UnidadQuery, UnidadQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UnidadQuery, UnidadQueryVariables>(UnidadDocument, options);
        }
export type UnidadQueryHookResult = ReturnType<typeof useUnidadQuery>;
export type UnidadLazyQueryHookResult = ReturnType<typeof useUnidadLazyQuery>;
export type UnidadSuspenseQueryHookResult = ReturnType<typeof useUnidadSuspenseQuery>;
export type UnidadQueryResult = Apollo.QueryResult<UnidadQuery, UnidadQueryVariables>;
export const Unidad_UpdateDocument = gql`
    mutation Unidad_update($idModulo: ID!, $idUnidad: ID!, $updateUnidadInput: UpdateUnidadInput!) {
  Unidad_update(
    idModulo: $idModulo
    idUnidad: $idUnidad
    updateUnidadInput: $updateUnidadInput
  ) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_UpdateMutationFn = Apollo.MutationFunction<Unidad_UpdateMutation, Unidad_UpdateMutationVariables>;

/**
 * __useUnidad_UpdateMutation__
 *
 * To run a mutation, you first call `useUnidad_UpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_UpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadUpdateMutation, { data, loading, error }] = useUnidad_UpdateMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *      updateUnidadInput: // value for 'updateUnidadInput'
 *   },
 * });
 */
export function useUnidad_UpdateMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_UpdateMutation, Unidad_UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_UpdateMutation, Unidad_UpdateMutationVariables>(Unidad_UpdateDocument, options);
      }
export type Unidad_UpdateMutationHookResult = ReturnType<typeof useUnidad_UpdateMutation>;
export type Unidad_UpdateMutationResult = Apollo.MutationResult<Unidad_UpdateMutation>;
export type Unidad_UpdateMutationOptions = Apollo.BaseMutationOptions<Unidad_UpdateMutation, Unidad_UpdateMutationVariables>;
export const Unidad_SoftDeleteDocument = gql`
    mutation Unidad_softDelete($idModulo: ID!, $idUnidad: ID!) {
  Unidad_softDelete(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_SoftDeleteMutationFn = Apollo.MutationFunction<Unidad_SoftDeleteMutation, Unidad_SoftDeleteMutationVariables>;

/**
 * __useUnidad_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useUnidad_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadSoftDeleteMutation, { data, loading, error }] = useUnidad_SoftDeleteMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useUnidad_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_SoftDeleteMutation, Unidad_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_SoftDeleteMutation, Unidad_SoftDeleteMutationVariables>(Unidad_SoftDeleteDocument, options);
      }
export type Unidad_SoftDeleteMutationHookResult = ReturnType<typeof useUnidad_SoftDeleteMutation>;
export type Unidad_SoftDeleteMutationResult = Apollo.MutationResult<Unidad_SoftDeleteMutation>;
export type Unidad_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Unidad_SoftDeleteMutation, Unidad_SoftDeleteMutationVariables>;
export const Unidad_HardDeleteDocument = gql`
    mutation Unidad_hardDelete($idModulo: ID!, $idUnidad: ID!) {
  Unidad_hardDelete(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_HardDeleteMutationFn = Apollo.MutationFunction<Unidad_HardDeleteMutation, Unidad_HardDeleteMutationVariables>;

/**
 * __useUnidad_HardDeleteMutation__
 *
 * To run a mutation, you first call `useUnidad_HardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_HardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadHardDeleteMutation, { data, loading, error }] = useUnidad_HardDeleteMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useUnidad_HardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_HardDeleteMutation, Unidad_HardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_HardDeleteMutation, Unidad_HardDeleteMutationVariables>(Unidad_HardDeleteDocument, options);
      }
export type Unidad_HardDeleteMutationHookResult = ReturnType<typeof useUnidad_HardDeleteMutation>;
export type Unidad_HardDeleteMutationResult = Apollo.MutationResult<Unidad_HardDeleteMutation>;
export type Unidad_HardDeleteMutationOptions = Apollo.BaseMutationOptions<Unidad_HardDeleteMutation, Unidad_HardDeleteMutationVariables>;
export const Unidad_FindSoftDeletedDocument = gql`
    query Unidad_findSoftDeleted($idModulo: ID!) {
  Unidad_findSoftDeleted(idModulo: $idModulo) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;

/**
 * __useUnidad_FindSoftDeletedQuery__
 *
 * To run a query within a React component, call `useUnidad_FindSoftDeletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnidad_FindSoftDeletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnidad_FindSoftDeletedQuery({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *   },
 * });
 */
export function useUnidad_FindSoftDeletedQuery(baseOptions: Apollo.QueryHookOptions<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables> & ({ variables: Unidad_FindSoftDeletedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>(Unidad_FindSoftDeletedDocument, options);
      }
export function useUnidad_FindSoftDeletedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>(Unidad_FindSoftDeletedDocument, options);
        }
export function useUnidad_FindSoftDeletedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>(Unidad_FindSoftDeletedDocument, options);
        }
export type Unidad_FindSoftDeletedQueryHookResult = ReturnType<typeof useUnidad_FindSoftDeletedQuery>;
export type Unidad_FindSoftDeletedLazyQueryHookResult = ReturnType<typeof useUnidad_FindSoftDeletedLazyQuery>;
export type Unidad_FindSoftDeletedSuspenseQueryHookResult = ReturnType<typeof useUnidad_FindSoftDeletedSuspenseQuery>;
export type Unidad_FindSoftDeletedQueryResult = Apollo.QueryResult<Unidad_FindSoftDeletedQuery, Unidad_FindSoftDeletedQueryVariables>;
export const Unidad_HardDeleteAllSoftDeletedDocument = gql`
    mutation Unidad_hardDeleteAllSoftDeleted($idModulo: ID!) {
  Unidad_hardDeleteAllSoftDeleted(idModulo: $idModulo) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Unidad_HardDeleteAllSoftDeletedMutation, Unidad_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useUnidad_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useUnidad_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useUnidad_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *   },
 * });
 */
export function useUnidad_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_HardDeleteAllSoftDeletedMutation, Unidad_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_HardDeleteAllSoftDeletedMutation, Unidad_HardDeleteAllSoftDeletedMutationVariables>(Unidad_HardDeleteAllSoftDeletedDocument, options);
      }
export type Unidad_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useUnidad_HardDeleteAllSoftDeletedMutation>;
export type Unidad_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Unidad_HardDeleteAllSoftDeletedMutation>;
export type Unidad_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Unidad_HardDeleteAllSoftDeletedMutation, Unidad_HardDeleteAllSoftDeletedMutationVariables>;
export const Unidad_RestoreDocument = gql`
    mutation Unidad_restore($idModulo: ID!, $idUnidad: ID!) {
  Unidad_restore(idModulo: $idModulo, idUnidad: $idUnidad) {
    _id
    moduloId
    numeroUnidad
    unidadTitle
    descripcion
    urlVideo
    materiales {
      _id
      materialTitle
      descripcion
      url
    }
    deleted
  }
}
    `;
export type Unidad_RestoreMutationFn = Apollo.MutationFunction<Unidad_RestoreMutation, Unidad_RestoreMutationVariables>;

/**
 * __useUnidad_RestoreMutation__
 *
 * To run a mutation, you first call `useUnidad_RestoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnidad_RestoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unidadRestoreMutation, { data, loading, error }] = useUnidad_RestoreMutation({
 *   variables: {
 *      idModulo: // value for 'idModulo'
 *      idUnidad: // value for 'idUnidad'
 *   },
 * });
 */
export function useUnidad_RestoreMutation(baseOptions?: Apollo.MutationHookOptions<Unidad_RestoreMutation, Unidad_RestoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Unidad_RestoreMutation, Unidad_RestoreMutationVariables>(Unidad_RestoreDocument, options);
      }
export type Unidad_RestoreMutationHookResult = ReturnType<typeof useUnidad_RestoreMutation>;
export type Unidad_RestoreMutationResult = Apollo.MutationResult<Unidad_RestoreMutation>;
export type Unidad_RestoreMutationOptions = Apollo.BaseMutationOptions<Unidad_RestoreMutation, Unidad_RestoreMutationVariables>;
export const Usuarios_FindAllByFirstnameDocument = gql`
    query Usuarios_findAllByFirstname($search: String) {
  usuarios_findAllByFirstname(search: $search) {
    status
    roles
    email
    email_verified
    deleted
    _id
    lastName
    firstName
  }
}
    `;

/**
 * __useUsuarios_FindAllByFirstnameQuery__
 *
 * To run a query within a React component, call `useUsuarios_FindAllByFirstnameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuarios_FindAllByFirstnameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuarios_FindAllByFirstnameQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useUsuarios_FindAllByFirstnameQuery(baseOptions?: Apollo.QueryHookOptions<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>(Usuarios_FindAllByFirstnameDocument, options);
      }
export function useUsuarios_FindAllByFirstnameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>(Usuarios_FindAllByFirstnameDocument, options);
        }
export function useUsuarios_FindAllByFirstnameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>(Usuarios_FindAllByFirstnameDocument, options);
        }
export type Usuarios_FindAllByFirstnameQueryHookResult = ReturnType<typeof useUsuarios_FindAllByFirstnameQuery>;
export type Usuarios_FindAllByFirstnameLazyQueryHookResult = ReturnType<typeof useUsuarios_FindAllByFirstnameLazyQuery>;
export type Usuarios_FindAllByFirstnameSuspenseQueryHookResult = ReturnType<typeof useUsuarios_FindAllByFirstnameSuspenseQuery>;
export type Usuarios_FindAllByFirstnameQueryResult = Apollo.QueryResult<Usuarios_FindAllByFirstnameQuery, Usuarios_FindAllByFirstnameQueryVariables>;
export const UsuarioDocument = gql`
    query Usuario($usuarioId: ID!) {
  usuario(id: $usuarioId) {
    roles
    status
    email_verified
    email
    deleted
    _id
    firstName
    lastName
  }
}
    `;

/**
 * __useUsuarioQuery__
 *
 * To run a query within a React component, call `useUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuarioQuery({
 *   variables: {
 *      usuarioId: // value for 'usuarioId'
 *   },
 * });
 */
export function useUsuarioQuery(baseOptions: Apollo.QueryHookOptions<UsuarioQuery, UsuarioQueryVariables> & ({ variables: UsuarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsuarioQuery, UsuarioQueryVariables>(UsuarioDocument, options);
      }
export function useUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsuarioQuery, UsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsuarioQuery, UsuarioQueryVariables>(UsuarioDocument, options);
        }
export function useUsuarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsuarioQuery, UsuarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsuarioQuery, UsuarioQueryVariables>(UsuarioDocument, options);
        }
export type UsuarioQueryHookResult = ReturnType<typeof useUsuarioQuery>;
export type UsuarioLazyQueryHookResult = ReturnType<typeof useUsuarioLazyQuery>;
export type UsuarioSuspenseQueryHookResult = ReturnType<typeof useUsuarioSuspenseQuery>;
export type UsuarioQueryResult = Apollo.QueryResult<UsuarioQuery, UsuarioQueryVariables>;
export const Usuarios_HardDeleteAllSoftDeletedDocument = gql`
    mutation Usuarios_hardDeleteAllSoftDeleted {
  usuarios_hardDeleteAllSoftDeleted {
    deletedCount
  }
}
    `;
export type Usuarios_HardDeleteAllSoftDeletedMutationFn = Apollo.MutationFunction<Usuarios_HardDeleteAllSoftDeletedMutation, Usuarios_HardDeleteAllSoftDeletedMutationVariables>;

/**
 * __useUsuarios_HardDeleteAllSoftDeletedMutation__
 *
 * To run a mutation, you first call `useUsuarios_HardDeleteAllSoftDeletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarios_HardDeleteAllSoftDeletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuariosHardDeleteAllSoftDeletedMutation, { data, loading, error }] = useUsuarios_HardDeleteAllSoftDeletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useUsuarios_HardDeleteAllSoftDeletedMutation(baseOptions?: Apollo.MutationHookOptions<Usuarios_HardDeleteAllSoftDeletedMutation, Usuarios_HardDeleteAllSoftDeletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Usuarios_HardDeleteAllSoftDeletedMutation, Usuarios_HardDeleteAllSoftDeletedMutationVariables>(Usuarios_HardDeleteAllSoftDeletedDocument, options);
      }
export type Usuarios_HardDeleteAllSoftDeletedMutationHookResult = ReturnType<typeof useUsuarios_HardDeleteAllSoftDeletedMutation>;
export type Usuarios_HardDeleteAllSoftDeletedMutationResult = Apollo.MutationResult<Usuarios_HardDeleteAllSoftDeletedMutation>;
export type Usuarios_HardDeleteAllSoftDeletedMutationOptions = Apollo.BaseMutationOptions<Usuarios_HardDeleteAllSoftDeletedMutation, Usuarios_HardDeleteAllSoftDeletedMutationVariables>;
export const Usuario_SoftDeleteDocument = gql`
    mutation Usuario_softDelete($idRemove: ID!) {
  usuario_softDelete(idRemove: $idRemove) {
    status
    roles
    deleted
    email
    _id
  }
}
    `;
export type Usuario_SoftDeleteMutationFn = Apollo.MutationFunction<Usuario_SoftDeleteMutation, Usuario_SoftDeleteMutationVariables>;

/**
 * __useUsuario_SoftDeleteMutation__
 *
 * To run a mutation, you first call `useUsuario_SoftDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuario_SoftDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioSoftDeleteMutation, { data, loading, error }] = useUsuario_SoftDeleteMutation({
 *   variables: {
 *      idRemove: // value for 'idRemove'
 *   },
 * });
 */
export function useUsuario_SoftDeleteMutation(baseOptions?: Apollo.MutationHookOptions<Usuario_SoftDeleteMutation, Usuario_SoftDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Usuario_SoftDeleteMutation, Usuario_SoftDeleteMutationVariables>(Usuario_SoftDeleteDocument, options);
      }
export type Usuario_SoftDeleteMutationHookResult = ReturnType<typeof useUsuario_SoftDeleteMutation>;
export type Usuario_SoftDeleteMutationResult = Apollo.MutationResult<Usuario_SoftDeleteMutation>;
export type Usuario_SoftDeleteMutationOptions = Apollo.BaseMutationOptions<Usuario_SoftDeleteMutation, Usuario_SoftDeleteMutationVariables>;
export const Usuario_FindByEmailDocument = gql`
    query Usuario_findByEmail($email: String!) {
  usuario_findByEmail(email: $email) {
    _id
    email
    email_verified
    isGoogleAuth
    roles
    status
  }
}
    `;

/**
 * __useUsuario_FindByEmailQuery__
 *
 * To run a query within a React component, call `useUsuario_FindByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuario_FindByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuario_FindByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUsuario_FindByEmailQuery(baseOptions: Apollo.QueryHookOptions<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables> & ({ variables: Usuario_FindByEmailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>(Usuario_FindByEmailDocument, options);
      }
export function useUsuario_FindByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>(Usuario_FindByEmailDocument, options);
        }
export function useUsuario_FindByEmailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>(Usuario_FindByEmailDocument, options);
        }
export type Usuario_FindByEmailQueryHookResult = ReturnType<typeof useUsuario_FindByEmailQuery>;
export type Usuario_FindByEmailLazyQueryHookResult = ReturnType<typeof useUsuario_FindByEmailLazyQuery>;
export type Usuario_FindByEmailSuspenseQueryHookResult = ReturnType<typeof useUsuario_FindByEmailSuspenseQuery>;
export type Usuario_FindByEmailQueryResult = Apollo.QueryResult<Usuario_FindByEmailQuery, Usuario_FindByEmailQueryVariables>;
export const Jwt_RequestPasswordResetDocument = gql`
    mutation Jwt_requestPasswordReset($requestPasswordResetInput: RequestPasswordResetInput!) {
  jwt_requestPasswordReset(requestPasswordResetInput: $requestPasswordResetInput)
}
    `;
export type Jwt_RequestPasswordResetMutationFn = Apollo.MutationFunction<Jwt_RequestPasswordResetMutation, Jwt_RequestPasswordResetMutationVariables>;

/**
 * __useJwt_RequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useJwt_RequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwt_RequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtRequestPasswordResetMutation, { data, loading, error }] = useJwt_RequestPasswordResetMutation({
 *   variables: {
 *      requestPasswordResetInput: // value for 'requestPasswordResetInput'
 *   },
 * });
 */
export function useJwt_RequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<Jwt_RequestPasswordResetMutation, Jwt_RequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Jwt_RequestPasswordResetMutation, Jwt_RequestPasswordResetMutationVariables>(Jwt_RequestPasswordResetDocument, options);
      }
export type Jwt_RequestPasswordResetMutationHookResult = ReturnType<typeof useJwt_RequestPasswordResetMutation>;
export type Jwt_RequestPasswordResetMutationResult = Apollo.MutationResult<Jwt_RequestPasswordResetMutation>;
export type Jwt_RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<Jwt_RequestPasswordResetMutation, Jwt_RequestPasswordResetMutationVariables>;
export const Jwt_ResetPasswordDocument = gql`
    mutation Jwt_resetPassword($resetPasswordInput: ResetPasswordInput!) {
  jwt_resetPassword(resetPasswordInput: $resetPasswordInput)
}
    `;
export type Jwt_ResetPasswordMutationFn = Apollo.MutationFunction<Jwt_ResetPasswordMutation, Jwt_ResetPasswordMutationVariables>;

/**
 * __useJwt_ResetPasswordMutation__
 *
 * To run a mutation, you first call `useJwt_ResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwt_ResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtResetPasswordMutation, { data, loading, error }] = useJwt_ResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useJwt_ResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<Jwt_ResetPasswordMutation, Jwt_ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Jwt_ResetPasswordMutation, Jwt_ResetPasswordMutationVariables>(Jwt_ResetPasswordDocument, options);
      }
export type Jwt_ResetPasswordMutationHookResult = ReturnType<typeof useJwt_ResetPasswordMutation>;
export type Jwt_ResetPasswordMutationResult = Apollo.MutationResult<Jwt_ResetPasswordMutation>;
export type Jwt_ResetPasswordMutationOptions = Apollo.BaseMutationOptions<Jwt_ResetPasswordMutation, Jwt_ResetPasswordMutationVariables>;
export const Jwt_SendVerificationEmailDocument = gql`
    mutation Jwt_sendVerificationEmail {
  jwt_sendVerificationEmail {
    accessToken
    user {
      _id
      roles
      iat
      exp
      email
      email_verified
      firstName
      lastName
      picture
    }
  }
}
    `;
export type Jwt_SendVerificationEmailMutationFn = Apollo.MutationFunction<Jwt_SendVerificationEmailMutation, Jwt_SendVerificationEmailMutationVariables>;

/**
 * __useJwt_SendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useJwt_SendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwt_SendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtSendVerificationEmailMutation, { data, loading, error }] = useJwt_SendVerificationEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useJwt_SendVerificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<Jwt_SendVerificationEmailMutation, Jwt_SendVerificationEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Jwt_SendVerificationEmailMutation, Jwt_SendVerificationEmailMutationVariables>(Jwt_SendVerificationEmailDocument, options);
      }
export type Jwt_SendVerificationEmailMutationHookResult = ReturnType<typeof useJwt_SendVerificationEmailMutation>;
export type Jwt_SendVerificationEmailMutationResult = Apollo.MutationResult<Jwt_SendVerificationEmailMutation>;
export type Jwt_SendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<Jwt_SendVerificationEmailMutation, Jwt_SendVerificationEmailMutationVariables>;
export const Jwt_UpdatePasswordDocument = gql`
    mutation Jwt_updatePassword($updatePasswordInput: UpdatePasswordInput!) {
  jwt_updatePassword(updatePasswordInput: $updatePasswordInput) {
    _id
    firstName
    lastName
    email
    email_verified
    isGoogleAuth
    roles
    picture
    notificaciones
    status
    deleted
  }
}
    `;
export type Jwt_UpdatePasswordMutationFn = Apollo.MutationFunction<Jwt_UpdatePasswordMutation, Jwt_UpdatePasswordMutationVariables>;

/**
 * __useJwt_UpdatePasswordMutation__
 *
 * To run a mutation, you first call `useJwt_UpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwt_UpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtUpdatePasswordMutation, { data, loading, error }] = useJwt_UpdatePasswordMutation({
 *   variables: {
 *      updatePasswordInput: // value for 'updatePasswordInput'
 *   },
 * });
 */
export function useJwt_UpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<Jwt_UpdatePasswordMutation, Jwt_UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Jwt_UpdatePasswordMutation, Jwt_UpdatePasswordMutationVariables>(Jwt_UpdatePasswordDocument, options);
      }
export type Jwt_UpdatePasswordMutationHookResult = ReturnType<typeof useJwt_UpdatePasswordMutation>;
export type Jwt_UpdatePasswordMutationResult = Apollo.MutationResult<Jwt_UpdatePasswordMutation>;
export type Jwt_UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<Jwt_UpdatePasswordMutation, Jwt_UpdatePasswordMutationVariables>;