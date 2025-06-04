// Validation functions for the Register form

/**
 * Validates full name
 * @param {string} fullName - The full name to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateFullName = (fullName) => {
  const trimmedName = fullName.trim();

  if (!trimmedName) {
    return { isValid: false, error: "Full name is required" };
  }

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      error: "Full name must be at least 2 characters long",
    };
  }

  if (trimmedName.length > 50) {
    return {
      isValid: false,
      error: "Full name must be less than 50 characters",
    };
  }

  // Check if name contains only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  if (!nameRegex.test(trimmedName)) {
    return {
      isValid: false,
      error:
        "Full name can only contain letters, spaces, hyphens, and apostrophes",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates email address
 * @param {string} email - The email to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateEmail = (email) => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return { isValid: false, error: "Email address is required" };
  }

  // Email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  if (trimmedEmail.length > 100) {
    return {
      isValid: false,
      error: "Email address must be less than 100 characters",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates password
 * @param {string} password - The password to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      error: "Password must be at least 8 characters long",
    };
  }

  if (password.length > 128) {
    return {
      isValid: false,
      error: "Password must be less than 128 characters",
    };
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one uppercase letter",
    };
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one lowercase letter",
    };
  }

  // Check for at least one number
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one number",
    };
  }

  // Check for at least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one special character",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates confirm password
 * @param {string} password - The original password
 * @param {string} confirmPassword - The confirm password to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return { isValid: false, error: "Confirm password is required" };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: "Passwords do not match" };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates phone number (Sri Lankan format)
 * @param {string} phoneNumber - The phone number to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validatePhoneNumber = (phoneNumber) => {
  const trimmedPhone = phoneNumber.trim();

  if (!trimmedPhone) {
    return { isValid: false, error: "Phone number is required" };
  }

  // Remove spaces, hyphens, and parentheses for validation
  const cleanPhone = trimmedPhone.replace(/[\s\-\(\)]/g, "");

  // Sri Lankan phone number patterns
  // Mobile: 07XXXXXXXX (10 digits starting with 07)
  // Landline: 0XXXXXXXXX (10 digits starting with 0)
  // International: +94XXXXXXXXX or 94XXXXXXXXX
  const phoneRegex = /^(\+94|94|0)?[0-9]{9,10}$/;

  if (!phoneRegex.test(cleanPhone)) {
    return {
      isValid: false,
      error: "Please enter a valid Sri Lankan phone number",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates NIC number (Sri Lankan format)
 * @param {string} nicNumber - The NIC number to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateNICNumber = (nicNumber) => {
  const trimmedNIC = nicNumber.trim().toUpperCase();

  if (!trimmedNIC) {
    return { isValid: false, error: "NIC number is required" };
  }

  // Old NIC format: 9 digits + V/X (e.g., 123456789V)
  // New NIC format: 12 digits (e.g., 200012345678)
  const oldNICRegex = /^[0-9]{9}[VX]$/;
  const newNICRegex = /^[0-9]{12}$/;

  if (!oldNICRegex.test(trimmedNIC) && !newNICRegex.test(trimmedNIC)) {
    return {
      isValid: false,
      error: "Please enter a valid Sri Lankan NIC number",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates address
 * @param {string} address - The address to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateAddress = (address) => {
  const trimmedAddress = address.trim();

  if (!trimmedAddress) {
    return { isValid: false, error: "Address is required" };
  }

  if (trimmedAddress.length < 5) {
    return {
      isValid: false,
      error: "Address must be at least 5 characters long",
    };
  }

  if (trimmedAddress.length > 200) {
    return {
      isValid: false,
      error: "Address must be less than 200 characters",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates city
 * @param {string} city - The city to validate
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateCity = (city) => {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    return { isValid: false, error: "City is required" };
  }

  if (trimmedCity.length < 2) {
    return { isValid: false, error: "City must be at least 2 characters long" };
  }

  if (trimmedCity.length > 50) {
    return { isValid: false, error: "City must be less than 50 characters" };
  }

  // Check if city contains only letters, spaces, hyphens, and apostrophes
  const cityRegex = /^[a-zA-Z\s\-']+$/;
  if (!cityRegex.test(trimmedCity)) {
    return {
      isValid: false,
      error: "City can only contain letters, spaces, hyphens, and apostrophes",
    };
  }

  return { isValid: true, error: "" };
};

/**
 * Validates the entire form
 * @param {object} formData - The form data object
 * @returns {object} - Object with isValid boolean and errors object
 */
export const validateForm = (formData) => {
  const errors = {};
  let isValid = true;

  // Validate each field
  const fullNameValidation = validateFullName(formData.fullName);
  if (!fullNameValidation.isValid) {
    errors.fullName = fullNameValidation.error;
    isValid = false;
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
    isValid = false;
  }

  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.error;
    isValid = false;
  }

  const confirmPasswordValidation = validateConfirmPassword(
    formData.password,
    formData.confirmPassword
  );
  if (!confirmPasswordValidation.isValid) {
    errors.confirmPassword = confirmPasswordValidation.error;
    isValid = false;
  }

  const phoneValidation = validatePhoneNumber(formData.phoneNumber);
  if (!phoneValidation.isValid) {
    errors.phoneNumber = phoneValidation.error;
    isValid = false;
  }

  const nicValidation = validateNICNumber(formData.nicNumber);
  if (!nicValidation.isValid) {
    errors.nicNumber = nicValidation.error;
    isValid = false;
  }

  const addressValidation = validateAddress(formData.address);
  if (!addressValidation.isValid) {
    errors.address = addressValidation.error;
    isValid = false;
  }
  const cityValidation = validateCity(formData.city);
  if (!cityValidation.isValid) {
    errors.city = cityValidation.error;
    isValid = false;
  }

  return { isValid, errors };
};

/**
 * Real-time field validation for individual fields
 * @param {string} fieldName - The name of the field to validate
 * @param {string} value - The value to validate
 * @param {object} formData - The entire form data (needed for confirm password)
 * @returns {object} - Object with isValid boolean and error message
 */
export const validateField = (fieldName, value, formData = {}) => {
  switch (fieldName) {
    case "fullName":
      return validateFullName(value);
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "confirmPassword":
      return validateConfirmPassword(formData.password, value);
    case "phoneNumber":
      return validatePhoneNumber(value);
    case "nicNumber":
      return validateNICNumber(value);    case "address":
      return validateAddress(value);
    case "city":
      return validateCity(value);
    default:
      return { isValid: true, error: "" };
  }
};

/**
 * Validates form data for Google OAuth users (excludes password validation)
 * @param {object} formData - The form data to validate
 * @returns {object} - Object with isValid boolean and errors object
 */
export const validateGoogleUserForm = (formData) => {
  let isValid = true;
  const errors = {};

  // Only validate required fields for Google users (no password fields)
  const phoneValidation = validatePhoneNumber(formData.phoneNumber);
  if (!phoneValidation.isValid) {
    errors.phoneNumber = phoneValidation.error;
    isValid = false;
  }

  const nicValidation = validateNICNumber(formData.nicNumber);
  if (!nicValidation.isValid) {
    errors.nicNumber = nicValidation.error;
    isValid = false;
  }

  const addressValidation = validateAddress(formData.address);
  if (!addressValidation.isValid) {
    errors.address = addressValidation.error;
    isValid = false;
  }

  const cityValidation = validateCity(formData.city);
  if (!cityValidation.isValid) {
    errors.city = cityValidation.error;
    isValid = false;
  }

  return { isValid, errors };
};
