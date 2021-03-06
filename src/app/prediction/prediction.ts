/***************************************
// The base class for the Prediction model.  These are the fields shown on the
// SRT Report page.
*****************************************/
export class Prediction {
    constructor (
        public solNum: String,
        public title: String,
        public url: String,
        public predictions: {RED: Number, GREEN: Number},
        public reviewRec: Boolean,
        public isReadable: String, //modified
        public eitLikelihood: String, //modified
        public Date: Date,
        public agency: String,
        public office: String,
        public contact: String,
        public position: String,
        public reviewStatus: Boolean,
        public noticeType: String
    ) {}
}
