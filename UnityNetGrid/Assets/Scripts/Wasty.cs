using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[DefaultExecutionOrder (-1000)]
public class Wasty : MonoBehaviour
{
    private void MyMethod()
    {
        // EditorApplication.update += Update;
        Debug.Log("Initializing");
    }

    // Start is called before the first frame update
    void Start()
    {
        MyMethod();
    }
}
