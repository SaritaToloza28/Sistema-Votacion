/* ==========================================
   DATOS BASE DE LA VERSION AZUL
========================================== */
const equipos = [
  {
    id: 1,
    serial: "ABC123",
    tipo: "Portátil",
    marca: "Dell",
    estado: "Operativo",
    responsable: "Juan Pérez"
  },
  {
    id: 2,
    serial: "XYZ456",
    tipo: "Escritorio",
    marca: "HP",
    estado: "Asignado",
    responsable: "María Gómez"
  },
  {
    id: 3,
    serial: "LMN789",
    tipo: "Impresora",
    marca: "Epson",
    estado: "En mantenimiento",
    responsable: "Soporte TIC"
  },
  {
    id: 4,
    serial: "QWE321",
    tipo: "Servidor",
    marca: "Lenovo",
    estado: "Operativo",
    responsable: "Infraestructura"
  }
];

const auditoria = [
  {
    icon: "bi-person-check",
    titulo: "Inicio de sesión exitoso",
    detalle: "El usuario admin_tic ingresó al sistema correctamente.",
    fecha: "Hoy - 08:10 a.m."
  },
  {
    icon: "bi-box-seam",
    titulo: "Registro de equipo",
    detalle: "Se registró el equipo serial ABC123 en el inventario institucional.",
    fecha: "Hoy - 09:02 a.m."
  },
  {
    icon: "bi-tools",
    titulo: "Mantenimiento actualizado",
    detalle: "Se registró mantenimiento preventivo para el equipo LMN789.",
    fecha: "Hoy - 10:25 a.m."
  },
  {
    icon: "bi-file-earmark-text",
    titulo: "Consulta de reporte",
    detalle: "Se generó un reporte de asignaciones activas del área TIC.",
    fecha: "Hoy - 11:15 a.m."
  }
];

/* ==========================================
   UTILIDADES
========================================== */
function obtenerClaseEstado(estado) {
  switch (estado.toLowerCase()) {
    case "operativo":
      return "status-operativo";
    case "en mantenimiento":
      return "status-mantenimiento";
    case "asignado":
      return "status-asignado";
    case "de baja":
      return "status-baja";
    default:
      return "status-asignado";
  }
}

/* ==========================================
   RENDER TABLA INVENTARIO
========================================== */
function renderTablaInventario() {
  const tbody = document.getElementById("inventoryTableBody");
  tbody.innerHTML = "";

  equipos.forEach((equipo) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${equipo.id}</td>
      <td>${equipo.serial}</td>
      <td>${equipo.tipo}</td>
      <td>${equipo.marca}</td>
      <td>
        <span class="badge-status ${obtenerClaseEstado(equipo.estado)}">
          ${equipo.estado}
        </span>
      </td>
      <td>${equipo.responsable}</td>
    `;

    tbody.appendChild(row);
  });
}

/* ==========================================
   RENDER LISTA DE AUDITORIA
========================================== */
function renderAuditoria() {
  const auditList = document.getElementById("auditList");
  auditList.innerHTML = "";

  auditoria.forEach((evento) => {
    const item = document.createElement("li");
    item.className = "list-group-item";

    item.innerHTML = `
      <div class="audit-item">
        <div class="audit-icon">
          <i class="bi ${evento.icon}"></i>
        </div>
        <div>
          <strong>${evento.titulo}</strong>
          <span class="d-block text-muted">${evento.detalle}</span>
          <small class="text-secondary">${evento.fecha}</small>
        </div>
      </div>
    `;

    auditList.appendChild(item);
  });
}

/* ==========================================
   LOGIN DEMO
========================================== */
function configurarLogin() {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin_tic" && password.length >= 4) {
      loginMessage.innerHTML = `
        <div class="alert alert-success mb-0">
          Bienvenido, <strong>${username}</strong>. Acceso simulado correcto.
        </div>
      `;
    } else {
      loginMessage.innerHTML = `
        <div class="alert alert-danger mb-0">
          Credenciales no válidas para esta demostración.
        </div>
      `;
    }

    loginForm.reset();
  });
}

/* ==========================================
   REGISTRO DEMO DE EQUIPOS
========================================== */
function configurarFormularioEquipos() {
  const equipmentForm = document.getElementById("equipmentForm");
  const equipmentMessage = document.getElementById("equipmentMessage");

  equipmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const serial = document.getElementById("serial").value.trim();
    const tipo = document.getElementById("tipo").value;
    const marca = document.getElementById("marca").value.trim();
    const estado = document.getElementById("estado").value;
    const responsable = document.getElementById("responsable").value.trim();

    const serialExistente = equipos.some(
      (equipo) => equipo.serial.toLowerCase() === serial.toLowerCase()
    );

    if (serialExistente) {
      equipmentMessage.innerHTML = `
        <div class="alert alert-warning">
          Ya existe un equipo registrado con ese serial.
        </div>
      `;
      return;
    }

    const nuevoEquipo = {
      id: equipos.length + 1,
      serial,
      tipo,
      marca,
      estado,
      responsable
    };

    equipos.push(nuevoEquipo);

    auditoria.unshift({
      icon: "bi-plus-circle",
      titulo: "Nuevo equipo registrado",
      detalle: `Se registró el equipo ${serial} (${tipo} - ${marca}) a nombre de ${responsable}.`,
      fecha: "Hace unos segundos"
    });

    renderTablaInventario();
    renderAuditoria();

    equipmentMessage.innerHTML = `
      <div class="alert alert-success">
        Equipo registrado correctamente.
      </div>
    `;

    equipmentForm.reset();

    setTimeout(() => {
      equipmentMessage.innerHTML = "";
      const modalElement = document.getElementById("equipoModal");
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }, 1200);
  });
}

/* ==========================================
   INICIALIZACION
========================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderTablaInventario();
  renderAuditoria();
  configurarLogin();
  configurarFormularioEquipos();
});