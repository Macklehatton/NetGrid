using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[DefaultExecutionOrder (-1000)]
public class Startup : MonoBehaviour
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
        var go = new GameObject();
        // GameObject.CreatePrimitive(PrimitiveType.Cube);
    }
}
