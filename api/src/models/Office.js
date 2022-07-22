const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  dateOfWork: String,
  timeOfWork: String,
  timeOfLunch: String,
  phones: [String],
  noPreRegistration: Boolean,
  schedule: {
    Mo: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    Tu: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    We: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    Th: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    Fr: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    Sa: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    },
    Su: {
      isReception: Boolean,
      timeOne: {
        start: String,
        end: String
      },
      timeTwo: {
        start: String,
        end: String
      }
    }
  },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Office", schema);
